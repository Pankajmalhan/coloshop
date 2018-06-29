var mongooseObject=require('./mongooseObject');
var mongoose = require('mongoose');
var userOrderSchema=mongooseObject.model('UserOrders',mongooseObject.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,required:[false],unique :[true]},
    productId:{ type: mongoose.Schema.Types.Number, ref: 'Product',required:[true]},
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User',required:[true]},
    quantity:{type:Number,required:[true]},
    price:{type:Number,required:[true]},
    total:{type:Number,required:[true]},
    createdOn:{type:Date,default:[new Date()]}
}));
module.exports=userOrderSchema;