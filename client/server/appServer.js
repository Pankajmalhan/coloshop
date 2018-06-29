var express = require('express')  
var routes = express.Router();
var bodyParser=require('body-parser');
var appData=require('../server');
var productController=require('./controller/productController');
var userController=require('./controller/userController');
var auth=require('./auth/authorization');
/***************  Product Controller **************/
routes.get('/initializedb',productController.dbInitializer);  
routes.get('/category',productController.category);
routes.get('/products/:id',productController.productById);
routes.get('/products',productController.products);
routes.post('/newOrder',auth.authMiddleware,productController.orderNewItem);
routes.get('/userOrders',auth.authMiddleware,productController.getUserorders);

/********  User controller ***************************/
routes.post('/signup',userController.signup);
routes.post('/signIn',userController.signIn);

/*************** Defualt  Route Handling *********************/
routes.get('*', function (req, res) {  
    console.log('Data Is Crahsed here!!!!!!!!!!!!!!!!!!!!!')
    res.send("Sorry! URL not found");  
});  
  
module.exports = routes;  