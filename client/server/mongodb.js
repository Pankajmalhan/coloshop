var express = require('express')  
var routes = express.Router();  
var User = require('./user');
var MongoClient = require('mongodb').MongoClient; 


// Connection URL  

//Middleware function  
// var fun1 = function (req, res, next) {  
// console.log("This is Fun1 Middleare funcion");  
// next();  
// };  
// var fun2 = function (req, res, next) {  
// console.log("This is Fun2 Middleare funcion");  
// next();  
// };  
  
// routes.use('/', fun1);  
// routes.use('/', fun2);  
//routing  
routes.get('/:name', function (req, res) {
//     var database; 
//     var client1;
//     var url = 'mongodb://localhost:27017';  
//     MongoClient.connect(url, (err, client) => {
//         if (err) return console.log(err);
//         client1=client;
//         database = client.db('tempDB');
//         console.log(database+"pankaj");
//         database.collection('Demo_Collection').find().toArray(function(err, results) {
//             client1.close();
//             res.send(results); 
//          })     
// }) 

//    // res.send(database);

var chris = new User({
    name: req.params.name,
    username: req.params.name,
    password: 'password1' 
  });
  
  // call the custom method. this will just add -dude to his name
  // user will now be Chris-dude
  chris.dudify(function(err, name) {
    if (err) throw err;
  
    console.log('Your new name is ' + name);
  });
  
  // call the built-in save method to save to the database
  chris.save(function(err) {
    if (err)
    {
        console.log(err);
        res.json({status: 500, error: err});        
    }
    else{
        res.send("success");        
    }
      });
});  
  
routes.get('/:id', function (req, res) {  
res.send("Your Id is: " + req.params.id);  
});  
  
routes.get('/api/:name', function (req, res) {  
res.send("Your Id is: " + req.params.name);  
});  
routes.get('/:name/:id', function (req, res) {  
res.send("Your Id is: " + req.params.id + " and Your Name is : " + req.params.name);  
});  
  
routes.get('*', function (req, res) {  
res.send("Sorry! URL not found");  
});  
  
module.exports = routes;  