import * as React from 'react';
import { Link } from 'react-router-dom';
import IAppState from '../../state/appState';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/actions';
import { connect } from 'react-redux';
import ICategory from '../../model/categoryModel';

interface ComponentProps{
	categoryList:ICategory[],
	selectedCategoryId:number
}
/** @augments {React.Component<object, object>} */
export default class Filter extends React.Component<ComponentProps, any>
{
    constructor(props:ComponentProps){
		super(props);
		var abc=12000;
		console.log(this.props);
	}
	renderCategory=()=>{
			return this.props.categoryList.map((categoryItem:ICategory)=>{
				if(categoryItem._id==this.props.selectedCategoryId){
					return <li className="active" key={categoryItem._id.toString()}><Link to={'/products/'+categoryItem._id} ><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>{categoryItem.categoryName}</Link></li>
				}
				else{
					return <li key={categoryItem._id.toString()}><Link to={'/products/'+categoryItem._id} >{categoryItem.categoryName}</Link></li>
				}
					
			})
	}
    render() {
        return (
            <div className="sidebar">
					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Product Category</h5>
						</div>
						<ul className="sidebar_categories">
							{this.renderCategory()}
						</ul>
					</div>
				</div>
    );
    }
}

// function mapStateToProps(state:IAppState) {
//     return {
// 		category: state.category
//     };
// }

// // Get actions and pass them as props to to UserList
// //      > now UserList has this.props.selectUser
// function mapDispatchToProps(dispatch:any){
// 	return bindActionCreators({
// 		getCategory: Actions.getCategory
// 		}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);