const MembersModel = require('../models/MembersModel');

// Create
exports.memberCreate=(req,res)=>{
   // let reqBody= req.body;
   
   var autoNumber = ()=> {
     return Math.floor(Math.random() * 90000) + 10000
   }
   const requestData = {
        member_id: autoNumber(),
        firstname:req.body.firstname,
        middlename:req.body.middlename,
        lastname:req.body.lastname,
        gender:req.body.gender,
        contact:req.body.contact,
        address:req.body.address,
        email:req.body.email
    }
    console.log(requestData);
   MembersModel.create(requestData,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// Read 
exports.membersSelect=(req,res)=>{
    let Query = {};
    let Projection = {'member_id':1,'firstname':1,'middlename':1,'lastname':1,'gender':1,'contact':1,'address':1,'email':1,'date_created':1,'_id':0}
    MembersModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Update 
exports.memberEdit = (req,res)=>{
    let id=req.params.id
    let query={_id:id}
    let reqBody= req.body
    MembersModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//Delete 
exports.memberRemove = (req,res)=>{
    let id=req.params.id 
    let query = {_id:id}
    MembersModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}



