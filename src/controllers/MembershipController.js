const MembersModel = require('../models/MembersModel');
const PlansModel = require('../models/PlansModel');
const PackagesModel = require('../models/PackagesModel');
const TrainerModel = require('../models/TrainerModel');


// R=Read
exports.membershipDetails= async(req,res)=>{
    let Query={};
    let Projection={'firstname':1,'middlename':1,'lastname':1,'_id':0}
    let PlanProjection={'plan':1,'_id':0}
    let PackageProjection={'package':1,'_id':0}
    let TrainerProjection={'name':1,'_id':0}
    
    var myData = [];
    
    MembersModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            myData.push(data)
        }
    })
    PlansModel.find({},PlanProjection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            myData.push(data)
        }
    })
    PackagesModel.find({},PackageProjection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            myData.push(data)
        }
    })
    TrainerModel.find({},TrainerProjection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            myData.push(data)      
        }
    })
    
    console.log('asfdasd'+ myData);
    res.status(200).json({status:"success",data:myData})


}

