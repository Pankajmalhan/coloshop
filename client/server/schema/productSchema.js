var mongooseObject=require('./mongooseObject');
var mongoose = require('mongoose');
var productSchema=mongooseObject.Schema({
    _id:{type:Number,required:[true],unique :[true]},
    discription:{type:String,required:[true]},
    image:{type:String,required:[true]},
    flag:{type:String},
    actualPrice:{type:Number,required:[true]},
    offerPrice:{type:Number,required:[true]},
    isDeleted:{type:Boolean,default:[true]},
    category:{ type: mongoose.Schema.Types.Number, ref: 'Category'},
    createdOn:{type:Date,default:[new Date()]}
});

var productModel=mongooseObject.model('Product',productSchema);
module.exports=productModel;