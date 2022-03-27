const TrainerModel = require('../models/TrainerModel');

// Create
exports.CreateTrainer=(req,res)=>{
   let reqBody= req.body;
   TrainerModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.SelectTrainer=(req,res)=>{
    let Query = {};
    let Projection = {'name':1,'contact':1,'email':1,'rate':1,'_id':0}
    TrainerModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.trainerEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    TrainerModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.trainerRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    TrainerModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



