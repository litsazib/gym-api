const PackagesModel = require('../models/PackagesModel');

// Create
exports.PackageCreate=(req,res)=>{
   let reqBody= req.body;
   PackagesModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.PackageSelect=(req,res)=>{
    let Query = {};
    let Projection = {'package':1,'description':1,'amount':1,'_id':0}
    PackagesModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.PackageEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    PackagesModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.PackageRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    PackagesModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



