const request = require('superagent');
var serverUrl='http://localhost:5500/api/';
export class ProjectAPI{
    public static getCategoryData():any{
      return request
        .get(serverUrl+'category');
    }

    public static getNewArrivals():any{
      return request
        .get(serverUrl+'products')
    }
    public static getAllProductsById(id:number):any{
      return request
        .get(serverUrl+'products/'+id)
    }

    public static postRegisterUser(data:any):any{
      return request
        .post(serverUrl+'signup')
        .send(data)
        .set('Accept', 'application/json')
    }

    public static usersignIn(data:any):any{
      return request
        .post(serverUrl+'signIn')
        .send(data)
        .set('Accept', 'application/json')
    }
}