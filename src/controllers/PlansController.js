const PlansModel = require('../models/PlansModel');

// Create
exports.PlanCreate=(req,res)=>{
   let reqBody= req.body;
   PlansModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.PlanSelect=(req,res)=>{
    let Query = {};
    let Projection = {'plan':1,'amount':1,'_id':0}
    PlansModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.planEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    PlansModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.planRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    PlansModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



