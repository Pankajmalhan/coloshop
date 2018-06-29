var mongooseObject=require('./mongooseObject');
var categorySchema=mongooseObject.Schema({
    _id:{type:Number,required:[true]},
    categoryName:{type:String,required:[true]}
});
var categoryModel=mongooseObject.model('Category',categorySchema);
module.exports=categoryModel;