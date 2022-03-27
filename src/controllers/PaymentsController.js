const PaymentModel = require('../models/PaymentModel');

// Create
exports.PaymentCreate=(req,res)=>{
   let reqBody= req.body;
   PaymentModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.PaymentSelect=(req,res)=>{
    let Query = {};
    let Projection = {'registration_id':1,'amount':1,'remarks':1,'type':1,'date_created':1,'_id':0}
    PaymentModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.PaymentEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    PaymentModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.PaymentRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    PaymentModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



