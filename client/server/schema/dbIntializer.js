var categoryModel=require('./categorySchema');
var productModel=require('./productSchema');
var mongoose = require('mongoose');
function  dbInitializer(){
    /***************** *******************
    Remove Category Data
    *************************************/
    categoryModel.remove({},function(err){
        if(err){
            console.log('Error in category Delete');
        }
        else{
            console.log('Category Data deleted successfully');
        }
    });
    /****************************************
    Add Category Data
    *******************************************/

    var category1=new categoryModel({
        _id:1,
        categoryName:'All'
    });
    createItem(category1,'category');

    var category2=new categoryModel({
        _id:2,
        categoryName:'Men'
    });
    createItem(category2,'category');

     var category3=new categoryModel({
        _id:3,
        categoryName:'Women'
    });
    createItem(category3,'category');

    var category4=new categoryModel({
        _id:4,
        categoryName:'Accessories'
    });

    createItem(category4,'category');

    /***************** *******************
    Remove Product Data
    *************************************/
    productModel.remove({},function(err){
        if(err){
            console.log('Error in product delete');
        }
        else{
            console.log('Product Data deleted successfully');
        }
    });

    /****************************************
    Add Product Data
    *******************************************/
    var product1=new productModel({
        _id:100,
        discription:'Fujifilm X100T 16 MP Digital Camera (Silver)',
        image:'assets/images/product_1.png',
        flag:'-$20',
        actualPrice:590.00,
        offerPrice:520.00,
        isDeleted:false,
        category:category2._id,
        createdOn:new Date()
    });

    createItem(product1,'Product');

    var product2=new productModel({
        _id:101,
        discription:'Samsung CF591 Series Curved 27-Inch FHD Monitor',
        image:'assets/images/product_2.png',
        flag:'new',
        actualPrice:610.00,
        offerPrice:610.00,
        isDeleted:false,
        category:category3._id,
        createdOn:new Date()
    });

    createItem(product2,'Product');

    var product3=new productModel({
        _id:102,
        discription:'Blue Yeti USB Microphone Blackout Edition',
        image:'assets/images/product_3.png',
        actualPrice:120.00,
        offerPrice:120.00,
        isDeleted:false,
        category:category2._id,
        createdOn:new Date()
    });

    createItem(product3,'Product');

    var product4=new productModel({
        _id:103,
        discription:'DYMO LabelWriter 450 Turbo Thermal Label Printer',
        image:'assets/images/product_4.png',
        flag:'sale',
        actualPrice:410.00,
        offerPrice:410.00,
        isDeleted:false,
        category:category3._id,
        createdOn:new Date()
    });

    createItem(product4,'Product');

    var product5=new productModel({
        _id:104,
        discription:'Pryma Headphones, Rose Gold & Grey',
        image:'assets/images/product_5.png',
        actualPrice:180.00,
        offerPrice:180.00,
        isDeleted:false,
        category:category3._id,
        createdOn:new Date()
    });

    createItem(product5,'Product');

    var product6=new productModel({
        _id:105,
        discription:'Fujifilm X100T 16 MP Digital Camera (Silver)',
        image:'assets/images/product_6.png',
        flag:'-$20',
        actualPrice:590.00,
        offerPrice:570.00,
        isDeleted:false,
        category:category3._id,
        createdOn:new Date()
    });

    createItem(product6,'Product');

    var product7=new productModel({
        _id:106,
        discription:'Samsung CF591 Series Curved 27-Inch FHD Monitor',
        image:'assets/images/product_6.png',
        actualPrice:610.00,
        offerPrice:610.00,
        isDeleted:false,
        category:category2._id,
        createdOn:new Date()
    });

    createItem(product7,'Product');

    var product8=new productModel({
        _id:107,
        discription:'Blue Yeti USB Microphone Blackout Edition',
        image:'assets/images/product_8.png',
        actualPrice:120.00,
        offerPrice:120.00,
        isDeleted:false,
        category:category3._id,
        createdOn:new Date()
    });

    createItem(product8,'Product');

    var product9=new productModel({
        _id:108,
        discription:'DYMO LabelWriter 450 Turbo Thermal Label Printer',
        image:'assets/images/product_9.png',
        flag:'sale',
        actualPrice:410.00,
        offerPrice:410.00,
        isDeleted:false,
        category:category2._id,
        createdOn:new Date()
    });

    createItem(product9,'Product');

    var product10=new productModel({
        _id:109,
        discription:'Pryma Headphones, Rose Gold & Grey',
        image:'assets/images/product_10.png',
        actualPrice:220.00,
        offerPrice:220.00,
        isDeleted:false,
        category:category3._id,
        createdOn:new Date()
    });

    var product11=new productModel({
        _id:110,
        discription:'Milton Hot Case',
        image:'assets/images/product_8.png',
        actualPrice:135.00,
        offerPrice:135.00,
        isDeleted:false,
        category:category4._id,
        createdOn:new Date()
    });
    createItem(product11,'Product');
    var product12=new productModel({
        _id:111,
        discription:'Lenskart UV Goggles',
        image:'assets/images/product_6.png',
        actualPrice:100.00,
        flag:'-$10',
        offerPrice:90.00,
        isDeleted:false,
        category:category4._id,
        createdOn:new Date()
    });
    createItem(product12,'Product');
}



function createItem(item,modelName){
    item.save(function(err){
        if(err){
            console.log('Error in create function of '+modelName+ ' '+err);
        }
        else{
            console.log('Created Successfully '+modelName);
        }
    })
}
module.exports=dbInitializer;
