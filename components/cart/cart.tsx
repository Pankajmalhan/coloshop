import * as React from 'react';
import { Fragment } from 'react';
import CartItem from './cartItem';
import Utilities from '../../util/util';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/actions';
import IAppState from '../../state/appState';
import { connect } from 'react-redux';
require('../../assets/styles/cart.css');

interface IcomponentProps{
    isAuthenticated:boolean,
    history:any
}
 class Cart extends React.Component<IcomponentProps, any> 
{
    constructor(props:any){
        super(props);
    }

    componentWillReceiveProps(nextProps:any){
        if(!nextProps.isAuthenticated){
            this.props.history.push('/');
        }
    }
    
    render() {
        return (
        <React.Fragment>
<div className="containerDiv">
<div className="card">
<table className="table table-hover shopping-cart-wrap">
<thead className="text-muted">
<tr>
  <th scope="col">Product</th>
  <th scope="col" style={{width:100}}>Quantity</th>
  <th scope="col" style={{width:100}}>Price</th>
  <th scope="col" style={{width:100}}>Total</th>
  <th scope="col" style={{width:120}} className="text-right">Action</th>
</tr>
</thead>
<tbody>
<CartItem></CartItem>
<CartItem></CartItem>
<CartItem></CartItem>
<tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotal</h5></td>
                        <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Estimated shipping</h5></td>
                        <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td>
                        <button type="button" className="btn btn-info removeBtn">
                            <span style={{color:'beige'}} className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                        </button>
                        </td>
                        <td>
                        <button type="button" className="btn btn-success removeBtn">
                            Checkout <span  style={{color:'beige'}} className="glyphicon glyphicon-play"></span>
                        </button></td>
                    </tr>
</tbody>
</table>
</div> 

</div> 
    </React.Fragment>
    );
    }
}

function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
        usersignIn: Actions.usersignIn,
        setUserInfo:Actions.setUserInfo
		}, dispatch);
}

function mapStateToProps(state:IAppState){
    return {
        isAuthenticated:state.isAuthenticated
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);