import ICategory from '../model/categoryModel';
import IProduct from '../model/productModel';

export default interface IAppState{
    category:ICategory[];
    productList:IProduct[];
    productListbyId:IProduct[];
    isAuthenticated:boolean,
    userData:any,
    userorders:any
}