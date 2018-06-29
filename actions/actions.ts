import ICategory from "../model/categoryModel";
import IProduct from "../model/productModel";
import { Dispatch } from "react-redux";
const request = require('superagent');
var serverUrl='http://localhost:5500/api/';

export class Actions {

    /******* Start Sync Action **************/
    public static getCategory(){
        return {
            type: 'CATEGORY_LIST'
        }
    }

    public static getProductList(){
        return {
            type: 'NEW_ARRIVALS'
        }
    }

    public static loadCategory(categoryData:ICategory[]){
        return {
            type:'Load_Category',
            payload:categoryData
        }
    }

    public static loadNewArrivals(productData:IProduct[]){
        return {
            type:'Load_Product',
            payload:productData
        }
    }

    public static loadProduct(productData:IProduct[]){
        return {
            type:'Load_ProductById',
            payload:productData
        }
    }

    public static setUserInfo(userData:any){
        return {
            type:'Set_UserInfo',
            payload:userData
        }
    }

    public static logOut(){
        localStorage.removeItem('jwtToken');
        return {
            type:'Set_UserInfo',
            payload:''
        }
    }

    public static SetUserOrders(data:any){
        return {
            type:'Set_UserOrders',
            payload:data
        }
    }

    /************End Sync Actions *******************/

    /************* Start Async Actions ********************/

    public static getCategoryData(){
        return (dispatch:any,getState:any)=>{
            return request
            .get(serverUrl+'category');
        }
    }

    
    public static getNewArrivals(){
        return (dispatch:any,getState:any)=>{
            return request
            .get(serverUrl+'products')
        }
    }

    public static getAllProductsById(id:number){
        return (dispatch:any,getState:any)=>{
            return request
        .get(serverUrl+'products/'+id)
        }
    }


    public static postRegisterUser(data:any){
        return (dispatch:any,getState:any)=>{
            return request
            .post(serverUrl+'signup')
            .send(data)
            .set('Accept', 'application/json')
        }
    }

    public static getCateData(){
        var thisObj=this;
        return (dispatch:any,getState:any)=>{
            return request
            .get(serverUrl+'category')
            .set('Accept', 'application/json')
            .end(function(err:any, res:any){
				if (err || !res.ok) {
				  console.log("oops! Something going wrong");
				} else {
                    console.log(thisObj);
						dispatch(thisObj.loadCategory(res.body)) 
				}
			  });
        }
    }

    public static getNewArrivalData(){
        return (dispatch:any,getState:any)=>{
            return request
            .get(serverUrl+'products')
            .set('Accept', 'application/json')
            .end(function(err:any, res:any){
				if (err || !res.ok) {
				  console.log("oops! Something going wrong");
				} else {
					dispatch(Actions.loadNewArrivals(res.body)) 
				}
			  });
        }
    }

    public static usersignIn(data:any){
        return (dispatch:any,getState:any)=>{
            return request
            .post(serverUrl+'signIn')
            .send(data)
            .set('Accept', 'application/json')
        }
    }

    public static orderNewItem(data:any){
        return (dispatch:any,getState:any)=>{
            request
            .post(serverUrl+'newOrder')
            .send(data)
            .set('Authorization',`Bearer ${localStorage.getItem('jwtToken')}`)
            .set('Accept', 'application/json')
            .end(function(err:any, res:any){
                if (err || !res.ok) {
                  console.log("oops! Something going wrong "+err);
                } else {
                   if(res.data='order added'){
                        dispatch(Actions.UserOrders())
                   }
                }
              })
        }
    }

    public static UserOrders(){
        return (dispatch:any,getState:any)=>{
            request
            .get(serverUrl+'userOrders')
            .set('Authorization',`Bearer ${localStorage.getItem('jwtToken')}`)
            .set('Accept', 'application/json')
            .end(function(err:any, res:any){
                if (err || res.statusText!='OK') {
                  console.log("oops! Something going wrong "+err);
                } else {
                   dispatch(Actions.SetUserOrders(res.body.items))
                }
              })
        }
    }
    /************** End Async Actions***********************/
}