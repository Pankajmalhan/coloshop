import * as React from 'react';
import { bindActionCreators } from "redux";
import IAppState from "../state/appState";
import { connect } from "react-redux";

interface ComponentProps{
    isAuthenticated:boolean,
    history:any
}

export default function (ComposedComponent:any){
    class Authenticate extends React.Component<ComponentProps,any>{
        constructor(props:any){
            super(props);
        };

        componentWillMount(){
            if(this.props.isAuthenticated){
                this.props.history.push('/')
            }
        }
        render(){
            return(
                <ComposedComponent {...this.props}></ComposedComponent>
            )
        }
    }
    function mapDispatchToProps(dispatch:any){
        return bindActionCreators({
            }, dispatch);
    }
    
    function mapStateToProps(state:IAppState){
        return {
            isAuthenticated:state.isAuthenticated
        }
    }
    return connect(mapStateToProps,mapDispatchToProps)(Authenticate);
}