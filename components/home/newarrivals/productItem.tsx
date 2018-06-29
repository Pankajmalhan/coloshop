import * as React from 'react';
import IAppState from '../../../state/appState';
import { bindActionCreators } from 'redux';
import { Actions } from '../../../actions/actions';
import { connect } from 'react-redux';
import ICategory from '../../../model/categoryModel';
import { ProjectAPI } from '../../../api/dataAPI';
import IProduct from '../../../model/productModel';
interface IProductItemProps {
    productItem: IProduct,
    isAuthenticated:boolean,
    OrderNewItem:Function
}


class ProductItem extends React.Component<IProductItemProps, any> 
{
	constructor(props:IProductItemProps){
		super(props);
    }

    render(){
      return ( 
        this.returndata() 
      )
    }

    additemToCart=(product:IProduct)=>(e:any)=>{
        e.preventDefault();
        var data={
            productId:product._id,
            price:product.offerPrice
        };
        this.props.OrderNewItem(data);
    }

    returndata=()=>{
        if( this.props.productItem.flag==undefined){
            return this.productItemNormal(this.props.productItem)
        }
        else if(this.props.productItem.flag!=undefined && (this.props.productItem.flag=="new")){
             return this.productItemNew(this.props.productItem)
         }
         else if(this.props.productItem.flag!=undefined && this.props.productItem.flag=="sale"){
             return this.productItemSale(this.props.productItem)
         }
         else
         {
            return this.productItemDiscount(this.props.productItem)
         }
    }

    productItemNormal(item:IProduct):any{
        var thisObj=this;
        return (
            <div className="product-item women" >
            <div className="product product_filter">
                <div className="product_image">
                    <img src={item.image} alt=""/>
                </div>
                <div className="favorite"></div>
                <div className="product_info">
                    <h6 className="product_name"><a href="single.html">{item.discription}</a></h6>
                    <div className="product_price">{'$'+item.offerPrice}</div>
                </div>
            </div>
            {thisObj.props.isAuthenticated && <div onClick={this.additemToCart(item)} className="red_button add_to_cart_button"><a href="" >add to cart</a></div>}
        </div>
        )
     }
 
     productItemNew(item:IProduct):any{
         var thisObj=this;
        return (
            <div className="product-item men" >
            <div className="product product_filter">
                <div className="product_image">
                    <img src={item.image} alt=""/>
                </div>
                <div className="favorite"></div>
                <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                <div className="product_info">
                    <h6 className="product_name"><a href="single.html">{item.discription}</a></h6>
                    <div className="product_price">{'$'+item.actualPrice}</div>
                </div>
            </div>
            {thisObj.props.isAuthenticated && <div onClick={this.additemToCart(item)} className="red_button add_to_cart_button"><a href="#">add to cart</a></div>}
        </div>
        )
     }
 
     productItemSale(item:IProduct):any{
         var thisObj=this;
        return (
            <div className="product-item accessories" >
            <div className="product product_filter">
                <div className="product_image">
                    <img src={item.image} alt=""/>
                </div>
                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                <div className="favorite favorite_left"></div>
                <div className="product_info">
                    <h6 className="product_name"><a href="single.html">{item.discription}</a></h6>
                    <div className="product_price">{'$'+item.actualPrice}</div>
                </div>
            </div>
            {thisObj.props.isAuthenticated && <div onClick={this.additemToCart(item)} className="red_button add_to_cart_button"><a href="#">add to cart</a></div>}
        </div>
        )
     }
     
     productItemDiscount(item:IProduct):any{
         var thisObj=this;
        return (
            <div className="product-item men women">
            <div className="product discount product_filter">
                <div className="product_image">
                    <img src={item.image} alt=""/>
                </div>
                <div className="favorite favorite_left"></div>
                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                <div className="product_info">
                    <h6 className="product_name"><a href="single.html">{item.discription}</a></h6>
                    <div className="product_price">{'$'+item.offerPrice}<span>{'$'+item.actualPrice}</span></div>
                </div>
            </div>
            {thisObj.props.isAuthenticated && <div onClick={this.additemToCart(item)} className="red_button add_to_cart_button"><a href="#">add to cart</a></div>}
        </div>
        )
     }
    
}

function mapStateToProps(state:IAppState,ownProps:any) {
    return {
        
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function mapDispatchToProps(dispatch:any){
	return bindActionCreators({
		OrderNewItem:Actions.orderNewItem
		}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem as any);