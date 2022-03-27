const RegistrationModel = require('../models/RegistrationModel');

// Create
exports.regCreate=(req,res)=>{
   let reqBody= req.body;
   RegistrationModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.regSelect=(req,res)=>{
    let Query = {};
    let Projection = {'member_id':1,'firstname':1,'middlename':1,'lastname':1,'gender':1,'contact':1,'address':1,'email':1,'date_created':1,'_id':0}
    RegistrationModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.regEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    RegistrationModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.regRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    RegistrationModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



