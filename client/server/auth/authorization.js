var jwt = require('jsonwebtoken');
var jwtConfig=require('../config');

var authMiddleware=(req,res,next)=>{
    const authorizationHeader=req.headers['authorization'];
    let token;
    if(authorizationHeader){
        token=authorizationHeader.split(' ')[1];
    }
    if(token){
        jwt.verify(token,jwtConfig.jwtSecret,(err,decoded)=>{
            if(err){
                res.status(401).json({
                    error:'Failed to authenticated'
                })
            }
            else{
                req.userData=decoded;
                next();
            }
        })
    }
    else{
        res.status(403).json({
            error:'No Token Provided'
        })
    }
}

module.exports={
    authMiddleware:authMiddleware
}