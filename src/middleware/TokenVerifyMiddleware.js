
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    let Token = req.headers['token'];
    
    jwt.verify(Token,"GYM@2022",(err,decoded)=>{
        if(err) {
             res.status(401).json({status:"invalid token",data:err})
        }else {
            next()
        }
    })
    
}