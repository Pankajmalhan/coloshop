var userModel=require('../schema/userschema');
var logger=require('../../logger/logger');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var jwtConfig=require('../config');
const saltRounds = 10;

var signup=(req,res,next)=>{
    userModel.find({'email':req.body.email})
    .exec(function(err,users){
        if(err) {
            logger(err)
            return res.send({'status':'error'});
        }
        else{
            if(users.length==0){
                bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                   if(err){
                        res.status(500).json({
                            error:err
                        });
                   }
                   else{
                    var userObj=new userModel({
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                        email:req.body.email,
                        mobileNo:req.body.mobileNo,
                        password:hash,
                    });
    
                    userObj.save(function(err){
                            if(err) {
                                logger(err);
                                return res.send({'status':'error'});
                            }
                            else{
                                res.status(200).send({status:'success'})
                            }
                    })
                   }
                  });
            }
            else{
                res.status(200).send({status:'exist'});
            }
        }
    })
    
}

var signIn=(req,res,next)=>{
    userModel.find({'email':req.body.email})
    .exec(function(err,users){
        if(err){
            logger(err);
            res.status(500).json({
                error:err
            });
        }
        else{
            console.log(users);
            if(users.length==1){
                bcrypt.compare(req.body.password, users[0].password, function(err, data) {
                    if(err){
                        logger(err);
                        res.status(500).json({
                            error:err
                        });
                    }

                    if(data){
                        var userData={firstName:users[0].firstName,
                            lastName:users[0].lastName,
                            email:users[0].email};

                        const token=jwt.sign({
                            _id:users[0]._id,
                            userData:userData
                        },
                        jwtConfig.jwtSecret
                    );

                        res.status(200).json({
                            'result':'success',
                            'tokenData':token
                        });
                    }
                });
            }
            else{
                res.status(200).json({
                    'result':'not exist'
                })
            }
        }
    })
}
module.exports={
    signup:signup,
    signIn:signIn
};
