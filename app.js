import React from 'react';  
import ReactDOM from 'react-dom';  
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom' ;
import {Provider} from 'react-redux';
import * as jwt from 'jsonwebtoken';
import { Actions } from './actions/actions';
require('./assets/imports/import');
var store =require('./store/appStore');
class App extends React.Component {  

  constructor(props){
    super(props);
    store.dispatch(Actions.getCateData());
    if(localStorage.jwtToken){
      store.dispatch(Actions.setUserInfo(jwt.decode(localStorage.jwtToken)));
      store.dispatch(Actions.UserOrders(jwt.decode(localStorage.jwtToken)));
    }
  }
    render() {  
       return ( 
      <Provider store={store}> 
     <BrowserRouter >  
     <Main/>  
     </BrowserRouter>  
     </Provider>
       )  
    }  
 }
ReactDOM.render(<App/>, document.getElementById('app')); 