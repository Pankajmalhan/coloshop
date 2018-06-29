import * as React from 'react';
import { CarouseLogin } from './carouselLogIn';
import FormValidator from '../../validation/formvalidator';
import { validationArray } from './loginFormValidationRules';
import { ProjectAPI } from '../../api/dataAPI';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/actions';
import { Redirect } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';
import IAppState from '../../state/appState';
import Utilities from '../../util/util';
interface componentState {
    email:string,
    password:string,
    validation:any,
    loginFailed:boolean
}

interface componentProps{
    isAuthenticated:boolean,
    history:any,
    usersignIn:Function,
    setUserInfo:Function,
    userOrders:Function
}

class LogInUser extends React.Component<componentProps, componentState> 
{
    validator:FormValidator;
    submitted:boolean=false;


    constructor(props: any) {
        super(props);
        this.validator = new FormValidator(validationArray);
        this.state={email:'',
                    password:'',validation:this.validator.valid(),loginFailed:false};
    }

    handleInputChange = (event:any) => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value,
        });
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
        var dataObj={
                'email':this.state.email,
                'password':this.state.password
            };

        this.props.usersignIn(dataObj)
        .then((res:any)=>{           
                if(res.body!=undefined && res.body.result=='success'){
                    if(res.body.tokenData!=undefined && res.body.tokenData!=''){
                        localStorage.setItem('jwtToken',res.body.tokenData);
                    };
                    console.log(jwt.decode(res.body.tokenData));
                    this.props.setUserInfo(jwt.decode(res.body.tokenData));
                    this.props.userOrders();
                    this.props.history.push('/');                     
                }
                else{
                    this.setState({
                        loginFailed:true
                    })
                }
        })  
    }

	render(){
        let validation = this.submitted ?       // if the form has been submitted at least once
        this.validator.validate(this.state) :   // then check validity every time we render
        this.state.validation ;
        return(
    <section className="login-block">
        <div className="container container-login">
	        <div className="row">
		        <div className="col-md-4 login-sec" >
		                <h2 className="text-center">Login COLO SHOP</h2>
		                <form className="login-form" autoComplete="off">
                        <div className={validation.email.isInvalid?'form-group has-error':'form-group'}>
                            <label htmlFor="email"
                             className="text-uppercase">Email Id</label>
                            <input type="text" className="form-control"
                             onChange={this.handleInputChange}
                             value={this.state.email}
                             autoComplete="off"
                              id="email" placeholder="Enter email" name="email"
                            />
                            <span className="help-block">{validation.email.message}</span>
     
                        </div>
                        <div className={validation.password.isInvalid?'form-group has-error':'form-group'}>
                            <label htmlFor="password" 
                            className="text-uppercase">Password</label>
                           <input type="password" className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                autoComplete="off"
                            id="password" placeholder="Enter password" name="password" />
                <span className="help-block">{validation.password.message}</span>
                        </div>
                        
                  {  this.submitted && this.state.loginFailed && <div className="form-group has-error">
                        <span className="help-block"> Email/Passowrd is not correct!!!</span>
                    </div>
                  }
                        <div className="form-check">
                            <button type="button" onClick={this.formSubmit} className="btn btn-login float-left btnLogIn">
                            <i className="fa fa-download"></i> &nbsp; Submit</button>
                        </div>
  
</form>

		</div>
		<CarouseLogin></CarouseLogin>
</div>
</div>
</section>
        )
    }
}

function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
        usersignIn: Actions.usersignIn,
        setUserInfo:Actions.setUserInfo,
        userOrders:Actions.UserOrders
		}, dispatch);
}

function mapStateToProps(state:IAppState){
    return {
        isAuthenticated:state.isAuthenticated
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogInUser);