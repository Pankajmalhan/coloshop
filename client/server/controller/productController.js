var categoryModel=require('../schema/categorySchema');
var productModel=require('../schema/productSchema');
var dbInitializer=require('../schema/dbIntializer');
var logger=require('../../logger/logger');
var userModel=require('../schema/userschema');
var userOrderSchema=require('../schema/userOrderSchema');
initializeDB=(req,res,next)=>{
    dbInitializer();
    res.send("success");
}

category=(req,res,next)=>{
    categoryModel.find({},function(err,categories){
        if(err){
            res.send("");
        }
        else{
            res.send(categories);
        }
    })
}

productById=(req,res,next)=>{
    if(req.params.id!=1)
    {
        var query=productModel.find({category:req.params.id})
        .sort({createdOn:'desc'})    
        .exec(function(err,product){
            if(err){
                res.send("");
            }
            else{
                res.send(product);
            }
        })
        
    }
    else{
        var query=productModel.find()
        .sort({createdOn:'desc'})    
        .exec(function(err,product){
            if(err){
                res.send("");
            }
            else{
                res.send(product);
            }
        })
    }
}

products=(req,res,next)=>{
    var query=productModel.find({})
    .limit(10)    
    .exec(function(err,product){
        if(err){
            res.send("");
        }
        else{
            res.send(product);
        }
    })
}

async function addUserOrder(req){
    try{
        var userData=await userModel.find({
            email:req.userData.userData.email
        });
    
        var orderAlreadyExist=await userOrderSchema.find({
            productId:req.body.productId,
            userId:userData[0]._id
        });

        if(orderAlreadyExist.length==0){
            var newOrder=new userOrderSchema({
                productId:req.body.productId,
                userId:userData[0]._id,
                quantity:1,
                price:req.body.price,
                total:req.body.price,
                createdOn:new Date()
            });
            await userOrderSchema.insertMany([newOrder]);
            return '1';
        }
        else{
           return '2';
        }
    }
    catch(exp){
        logger(exp);
        return '0';
    }
}
orderNewItem=(req,res,next)=>{
    if(req.userData){
        addUserOrder(req)
        .then((result)=>{
            if(result=='1'){
                res.status(200).json({
                    data:'order added'
                })
            }
            else if(result=='2'){
                res.status(200).json({
                    data:'order already exist'
                })
            }
        })
        .catch((data)=>{

        })
    }else{
        res.status(401).json({
            error:'Failed to authenticated'
        })
    }
    
}
async function getUserorders(req,res,next){
    try{
        var userData=await userModel.find({
            email:req.userData.userData.email
        });
    
        var orders=await userOrderSchema.find({
            userId:userData[0]._id
        });

        res.status(200).json({
            items:orders
        })
    }
    catch(exp){
        res.status(500).json({
            error:'Inernal Server Error'
        })
    }
}
module.exports={
    products:products,
    productById:productById,
    category:category,
    dbInitializer:initializeDB,
    orderNewItem:orderNewItem,
    getUserorders:getUserorders
};
