const ScheduleModel = require('../models/ScheduleModel');

// Create
exports.scheduleCreate=(req,res)=>{
   let reqBody= req.body;
   ScheduleModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.scheduleSelect=(req,res)=>{
    let Query = {};
    let Projection = {'member_id':1,'dow':1,'date_from':1,'date_to':1,'time_from':1,'time_to':1,'_id':0}
    ScheduleModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.scheduleEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    ScheduleModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.scheduleRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    ScheduleModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



