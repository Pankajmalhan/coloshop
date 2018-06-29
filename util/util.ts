import * as store from '../store/appStore';

export default class Utilities{
    public static checkUserAunthentication(){
        return store.getState().isAuthenticated;
    }
}