var mongooseObject=require('./mongooseObject');
var userSchema=mongooseObject.Schema({
    firstName:{type:String,required:[true]},
    lastName:{type:String,required:[true]},
    email:{type:String,required:[true]},
    mobileNo:{type:String,required:[true]},
    password:{type:String,required:[true]}
});
var userModel=mongooseObject.model('User',userSchema);
module.exports=userModel;