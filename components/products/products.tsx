import * as React from 'react';
import { Link } from 'react-router-dom';
import SortPaging from './sortPaging';
import Filter from './filter';
import IAppState from '../../state/appState';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/actions';
import { connect } from 'react-redux';
import { ProjectAPI } from '../../api/dataAPI';
import IProduct from '../../model/productModel';
import ProducstItem from './productsItem';
var divStyle = {
    border: "0px",
    color: "#f6931f",
    fontweight: "bold"
  };
  interface ComponentState{
      category:string,
      productList:IProduct[],
      categoryId:number
  };

  interface ComponentProps{
      getCategoty:string,
      category:any,
      productList:any,
      loadProductById:any,
      match:any,
      age:number
  }
class Products extends React.Component<ComponentProps, ComponentState> 
{
    constructor(props:any){
        super(props);
        this.state={category:'',productList:[],categoryId:0};
    }
    
    componentDidMount() { 
		if(this.props.category==undefined || this.props.category.length==0){
        } 
        this.loadProducts(this.props.match.params.id);
     }
     
     loadProducts=(productId:number)=>{
        let this_=this;
        ProjectAPI.getAllProductsById(productId)
        .end(function(err:any, res:any){
            if (err || !res.ok) {
              console.log("oops! Something going wrong");
            } else {
                    this_.props.loadProductById(res.body);
            }
          });
     }
     
     componentWillReceiveProps(nextProps:any){
        if(this.props.match.params.id!=nextProps.match.params.id)
        {
            if(nextProps.category.filter((x:any)=>x._id==nextProps.match.params.id).length>0){
                this.setState({  
                    category:nextProps.category.filter((x:any)=>x._id==nextProps.match.params.id)[0].categoryName,
                    categoryId:nextProps.match.params.id
                  })
             }
             this.loadProducts(nextProps.match.params.id);
        }
         
         this.setState({  
            productList:nextProps.productList.sort(this.compareByDate),
            category :nextProps.category.filter((x:any)=>x._id==nextProps.match.params.id)[0].categoryName 
          });
    }
          
          renderProductItems(){	
			return this.state.productList.map((product:IProduct) => {
				return <ProducstItem productItem={product} key={product._id.toString()}></ProducstItem>
			});
     }
     
     elementPaging=(paging:number)=>{
        this.setState({  
			productList:this.props.productList.slice(0,paging)  
          });
     }

     compareByPrice(valueA:IProduct,valueB:IProduct):number{
         let returnValue:number=0;
            if(valueA.offerPrice<valueB.offerPrice)
            returnValue= -1;
            else if(valueA.offerPrice>valueB.offerPrice)
            returnValue= 1;
            else
            returnValue= 0; 
        return returnValue;
     }

     compareByDate(valueA:IProduct,valueB:IProduct):number{
        let returnValue:number=0;
           if(valueA.createdOn<valueB.createdOn)
           returnValue= -1;
           else if(valueA.createdOn>valueB.createdOn)
           returnValue= 1;
           else
           returnValue= 0; 
       return returnValue;
    }

    compareByName(valueA:IProduct,valueB:IProduct):number{
        let returnValue:number=0;
           if(valueA.discription<valueB.discription)
           returnValue= -1;
           else if(valueA.discription>valueB.discription)
           returnValue= 1;
           else
           returnValue= 0; 
       return returnValue;
    }

     elementOrder=(orderBy:string)=>{
         if(orderBy=='price'){
            this.setState({  
                productList:this.state.productList.sort(this.compareByPrice)  
              });
         }
        else if(orderBy=='default'){
            this.setState({  
                productList:this.state.productList.sort(this.compareByDate)  
              });
         }
         else if(orderBy=='name'){
            this.setState({  
                productList:this.state.productList.sort(this.compareByName)  
              });
         }

     }
     
    render() {
        return (
                <div className="container product_section_container">
		<div className="row">
			<div className="col product_section clearfix">

				<div className="breadcrumbs d-flex flex-row align-items-center">
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>{this.state.category}</a></li>
					</ul>
				</div>
				<Filter selectedCategoryId={this.props.match.params.id} categoryList={this.props.category} ></Filter>
				<div className="main_content">
					<div className="products_iso">
						<div className="row">
							<div className="col">
								<SortPaging Paging={this.elementPaging} Order={this.elementOrder}></SortPaging>
								<div className="row">
                                    {this.renderProductItems()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
    }
}

function mapStateToProps(state:IAppState) {
    return {
        category: state.category,
        productList:state.productListbyId
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
		getCategory: Actions.getCategory
        ,loadProductById:Actions.loadProduct
		}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);