const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'),SALT_WORK_FACTOR = 10;

// C=Create
exports.CreateUser=(req,res)=>{
   let reqBody= req.body;
   UserModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// R=Read
exports.ReadUser=(req,res)=>{
    let Query={};
    let Projection={'name':1,'username':1,'type':1,'_id':0}
    UserModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// U=Update
exports.UpdateUser=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    let reqBody= req.body;
    
    UserModel.updateOne(QUERY,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// D=Delete
exports.RemoveUser = (req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    UserModel.remove(QUERY,(err,data)=>{
        if(err) {
            res.status(400).json({status:"fail",data:err})
        }else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// User login
exports.UserLogin =(req,res)=> {
    let username=req.body['username'];   
    var password = req.body['password'];

   //  bcrypt.comparePassword(pass,password,function(err, results){
   //      if(err){
   //          throw new Error(err)
   //       }
   //       if (results) {
   //          return res.status(200).json({ status: "Login success" })
   //      } else {
   //          return res.status(401).json({ status: "Invalid credencial",data:pass })
   //      }
   // })
    
    UserModel.find({username,password},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          if(data.length>0){
              // Create Auth Token
              let Payload={exp: Math.floor(Date.now() / 1000) + (72*60*60), data:data[0]}
              let token = jwt.sign( Payload,'GYM@2022');
    
              res.status(200).json({status:"success",token:token,data:data[0]})
          }
          else {
              res.status(401).json({status:"unauthorized"})
          }
      }
    })
}
