import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IAppState from '../../state/appState';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/actions';
import { ProjectAPI } from '../../api/dataAPI';
import ICategory from '../../model/categoryModel';

interface statetProps{
	isAuthenticated:boolean,
	category:any,
	userData:any,
	userorders:Number
}

interface dispatchProps{
	getCategory:Function,
	loadCategory:Function,
	logout:Function,
	setUserOrders:Function,
	
}

class Header extends React.Component<statetProps & dispatchProps, any> 
{
	constructor(props:any){
		super(props);
	}
	 renderCategory(){
		return this.props.category.map((category:ICategory)=>{
			   return(
				<li key={category._id}><Link to={'/products/'+category._id} >{category.categoryName}</Link></li>
			   )
		})
	}
	logOut=(e:any)=>{
		e.preventDefault();
		this.props.logout();
		this.props.setUserOrders([]);
	}

	userLinks(){
		if(this.props.isAuthenticated){
			return(
			<ul>
				<li ><a href="" onClick={this.logOut}><i className="fa fa-sign-out" aria-hidden="true"></i>Sign Out</a></li>
				<li><Link to={'/register-user'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i>My Cart</Link></li>
			</ul>
			)
		}
		else{
			return (
			<ul>
				<li><Link to={'/login-user'} ><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
				<li><Link to={'/register-user'} ><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
			</ul>
			)
		}
	}

    render() {
        return (
            <div>
                <header className="header trans_300">
		
		<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-right">
						<div className="logo_container">
                        <Link to='/' >colo<span>shop</span></Link>
						</div>
						<nav className="navbar">
							<ul className="navbar_menu">
								<li><Link to='/' >Home</Link></li>
								{this.renderCategory()}
							</ul>
							<ul className="navbar_user">
								<li className="checkout">
								<Link to={'/orders'} >
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span id="checkout_items" className="checkout_items">{this.props.userorders}</span>
									</Link>
								</li>
							</ul>
							<div className="top_nav_right">
							<ul className="top_nav_menu">
								<li className="account">
									<a href="#">
										{this.props.isAuthenticated?this.props.userData.userData.firstName+' '+this.props.userData.userData.lastName :'My Account' }
										<i className="fa fa-angle-down"></i>
									</a>
									<ul className="account_selection">
										{this.userLinks()}
									</ul>
								</li>
							</ul>
						</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

	</header>
    </div>
    );
    }
}

function mapStateToProps(state:IAppState) {
    return {
		category: state.category,
		isAuthenticated:state.isAuthenticated,
		userData:state.userData,
		userorders:state.userorders.length
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
		getCategory: Actions.getCategory,
		loadCategory:Actions.getCategory,
		logout:Actions.logOut,
		setUserOrders:Actions.SetUserOrders
		}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);