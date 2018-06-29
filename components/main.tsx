import * as React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { Switch, Route } from 'react-router-dom' ;
import HomeIndex from './home/index';
import Products from './products/products';
import RegisterUser from './user/registerUser';
import LogInUser from './user/loginUser';
import Cart from './cart/cart';
import Authenticate from '../hoc/authenticateRoute';
export default class Main extends React.Component<any, any> 
{
    render() {
        return (
        <div>
     <Header></Header>
     <Switch>  
        <Route exact path="/products/:id" component={Products}/> 
        <Route exact path='/' component={HomeIndex}/>
        <Route exact path='/register-user' component={Authenticate(RegisterUser)}/> 
        <Route exact path='/login-user' component={Authenticate(LogInUser)}/>
        <Route path="/orders" component={Authenticate(Cart)}/>     
        <Route path="*" component={HomeIndex}/> 
     </Switch>
     <Footer></Footer>
        </div>
    );
    }
}   