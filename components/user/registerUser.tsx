import * as React from 'react';
import Link, { LinkedComponent } from 'valuelink'
// If you're using TypeScript or the modern module bundler (like webpack 2) supporting ES6 imports and "tree shaking".
import { Input, TextArea, Select, Radio, Checkbox } from 'valuelink/lib/tags'
import FormValidator from '../../validation/formvalidator';
import Validateions from '../../validation/validator';
import validator from 'validator';
import { ProjectAPI } from '../../api/dataAPI';
import {validationArray} from './formValidationRules';
import { Dialogue } from './dialogue';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/actions';
import { connect } from 'react-redux';
import IAppState from '../../state/appState';
interface componentState {
    firstName:string,
    lastName:string,
    email:string,
    mobileNo:string,
    password:string,
    repeatpassword:string,
    validation:any,
    dialogueData:any
}

interface componentProps{
    userSignUp:Function,
    history:any,
    isAuthenticated:boolean
}

class RegisterUser extends React.Component<componentProps, componentState> 
{
    validator:FormValidator;
    submitted:boolean=false;
    data:string='Success';
    constructor(props: any) {
        super(props);
        console.log(this.props);
        require('../../assets/styles/signup_page.css');
        this.validator = new FormValidator(validationArray);
        this.state={email:'',firstName:'',lastName:'',mobileNo:'',
                    password:'',repeatpassword:'',validation:this.validator.valid(),dialogueData:''};
    }

    handleInputChange = (event:any) => {
        event.preventDefault();
    
        this.setState({
          [event.target.name]: event.target.value,
        });
      }

    resetForm=(event:any)=>{
      event.preventDefault();
      this.setState({email:'',firstName:'',lastName:'',mobileNo:'',
      password:'',repeatpassword:'',validation:this.validator.valid()});
      this.submitted=false;
    }


    formSubmit=(event:any)=>{
        event.preventDefault();
        const validationResult = this.validator.validate(this.state);
        this.submitted=true;
        this.setState({validation:validationResult});
        if(validationResult.isValid){
            this.postDataToAPI();
        }
        else{
           // alert('Form is not valid');
        }
    }

    postDataToAPI=()=>{
        var dataObj={'firstName':this.state.firstName,'lastName':this.state.lastName,
                'email':this.state.email,'mobileNo':this.state.mobileNo,
                'password':this.state.password};     
        this.props.userSignUp(dataObj)
        .then((res:any)=>{           
                this.setState({
                    dialogueData:res.body.status
                });

                $('#href1').trigger('click');
        })
    }


    gotoHome=(event:any)=>{
        event.preventDefault();
        if(this.state.dialogueData=='success'){
            this.props.history.push("/")
        }
        else if(this.state.dialogueData=='exist'){
            this.setState({
                email:''
            });
            $("#email").focus();
        }
        
    }
    
    render() {
        let validation = this.submitted ?                         // if the form has been submitted at least once
        this.validator.validate(this.state) :   // then check validity every time we render
        this.state.validation ;
                          // otherwise just use what's in state
        return (
            <div className="container">
            <div className="signupForm">
            <form   autoComplete="off" >
            <div  className="row">
            <div className="col-md-6 col-sm-12 col-md-offset-3">
                <h5>Please fill in this form to create an account.</h5>
              <hr/>
            <div className={validation.firstName.isInvalid?'form-group has-error':'form-group'}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" className="form-control" id="firstName"
                onChange={this.handleInputChange}
                value={this.state.firstName}
                 placeholder="Enter first name" name="firstName" />
                <span className="help-block">{validation.firstName.message}</span>
            </div>
            <div className={validation.lastName.isInvalid?'form-group has-error':'form-group'}>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" className="form-control" id="lastName"
                onChange={this.handleInputChange}
                value={this.state.lastName}
                 placeholder="Enter last name" name="lastName" />
                <span className="help-block">{validation.lastName.message}</span>
            </div>
            <div className={validation.email.isInvalid?'form-group has-error':'form-group'}>
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control"
                onChange={this.handleInputChange}
                value={this.state.email}
                 id="email" placeholder="Enter email" name="email" />
                <span className="help-block">{validation.email.message}</span>
            </div>
            <div className={validation.mobileNo.isInvalid?'form-group has-error':'form-group'}>
                <label htmlFor="mobileNo">Mobile No:</label>
                <input type="text" className="form-control"
                onChange={this.handleInputChange}
                value={this.state.mobileNo}
                max="10"
                id="mobileNo" placeholder="Enter mobile no." name="mobileNo" />
                <span className="help-block">{validation.mobileNo.message}</span>
            </div>
            <div className={validation.password.isInvalid?'form-group has-error':'form-group'}>
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control"
                onChange={this.handleInputChange}
                value={this.state.password}
                 id="password" placeholder="Enter password" name="password" />
                <span className="help-block">{validation.password.message}</span>
            </div>
            <div className={validation.repeatpassword.isInvalid?'form-group has-error':'form-group'}>
                <label htmlFor="repeatpassword">Repeat Password:</label>
                <input type="password" className="form-control"
                onChange={this.handleInputChange}
                value={this.state.repeatpassword}
                 id="repeatpassword" placeholder="Enter password" name="repeatpassword" />
                <span className="help-block">{validation.repeatpassword.message}</span>
            </div>
            <button id="submit" type="button" onClick={this.formSubmit} className="newsletter_submit_btn trans_300" value="Submit">submit</button>
            <button id="clear" type="button" onClick={this.resetForm} className="newsletter_submit_btn trans_300" value="Submit">Reset</button>
            </div>
            <a href="#myModal" id="href1" className="trigger-btn" data-toggle="modal">Click to Open Success Modal</a>
            <Dialogue status={this.state.dialogueData} gotoHome={this.gotoHome}></Dialogue>
            </div>
          </form>
          </div>
          </div>
    );
    }
}

function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
		userSignUp: Actions.postRegisterUser
		}, dispatch);
}

function mapStateToProps(state:IAppState){
    return {
        isAuthenticated:state.isAuthenticated
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterUser);