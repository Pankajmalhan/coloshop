import * as React from 'react';
import IAppState from '../../../state/appState';
import { bindActionCreators } from 'redux';
import { Actions } from '../../../actions/actions';
import { connect } from 'react-redux';
import ICategory from '../../../model/categoryModel';
import { ProjectAPI } from '../../../api/dataAPI';
import IProduct from '../../../model/productModel';
import ProductItem from './productItem';
interface IStateNewArrivals{
	productList:IProduct[]
}

interface IComponentProps{
	isAuthenticated:boolean,
	category:any,
	loadCategory:Function,
	newArrivals:any,
	loadNewArrivals:Function
}
class NewArrivals extends React.Component<IComponentProps, IStateNewArrivals> 
{
	constructor(props:any){
		super(props);
		this.state={productList:[]}
    }

    componentDidMount() { 
		this.loadNewArrivals();
	 }

	 componentWillReceiveProps(nextProps:any){
		this.setState({  
			productList:nextProps.newArrivals  
		  }) 
		  }

	 filterData=(categoryId:number,e:any)=>{
		 if(categoryId==1){
			this.setState({  
				productList:this.props.newArrivals  
			  }) 
		 }
		 else
		 {
			this.setState({  
				productList:this.props.newArrivals.filter((item:IProduct)=>item.category==categoryId)  
			  }) 
		 }
	 }

	 loadNewArrivals=()=>{
		if(this.props.newArrivals.length==0){
			this.props.loadNewArrivals();		
	 }else{
		this.setState({  
			productList:this.props.newArrivals  
		  }) 
	 }
	}
	 
	 
	 renderCategory(){
		 return this.props.category.map((category:ICategory)=>{
				return(
					<li key={category._id} 
					onMouseDown={(e)=>this.filterData(category._id,e)}
					className={'grid_sorting_button button d-flex flex-column justify-content-center align-items-center'+(category._id==1?' active is-checked':'')}
					data-filter={category._id==1?'*':('.'+category.categoryName)}>{category.categoryName}</li>
				)
		 })
	 }

	 renderNewArrivale(){	
			return this.state.productList.map((product:IProduct) => {
				return <ProductItem productItem={product} key={product._id.toString()} isAuthenticated={this.props.isAuthenticated}></ProductItem>
				});
	 }
    render() {
        return (
            <div className="new_arrivals">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title new_arrivals_title">
						<h2>New Arrivals</h2>
					</div>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col text-center">
					<div className="new_arrivals_sorting">
						<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
							{this.renderCategory()}
							
						</ul>
					</div>
				</div>
			</div>
			<div className="row">				
							{this.renderNewArrivale()}
			</div>
		</div>
	</div>
    );
    }
}

function mapStateToProps(state:IAppState) {
    return {
		category: state.category,
		newArrivals:state.productList,
		isAuthenticated:state.isAuthenticated
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
		getCategory: Actions.getCategory,
		loadNewArrivals:Actions.getNewArrivalData
		}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals);