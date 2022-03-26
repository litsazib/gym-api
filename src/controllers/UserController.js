const UserModel = require('../models/UserModel');


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





