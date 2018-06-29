import IAppState from '../state/appState';
import { Actions } from '../actions/actions';
import { ProjectAPI } from '../api/dataAPI';
import  * as _  from 'lodash';
const INITIAL_STATE:IAppState={
category:[],
productList:[],
productListbyId:[],
isAuthenticated:false,
userData:null,
userorders:[]
};

export default function allReducers(state: IAppState=INITIAL_STATE, action: any) {
    switch(action.type){
        case 'Load_Category':
                return (<any>Object).assign({},state,{
                    category:action.payload
                });
        case 'Load_Product':
                return (<any>Object).assign({},state,{
                    productList:action.payload
                });
        case 'Load_ProductById':
                return (<any>Object).assign({},state,{
                    productListbyId:action.payload
                });
        case 'Set_UserInfo':
            return (<any>Object).assign({},state,{
                isAuthenticated:!_.isEmpty(action.payload),
                userData:action.payload
            }); 
        case 'Set_UserOrders':
            return (<any>Object).assign({},state,{
                userorders:action.payload
            }); 

    };
    return state;
}