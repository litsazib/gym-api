const ProductModel=require('../models/ProductModel')


// C=Create
exports.ProductInsert=(req,res)=>{
   let reqBody= req.body;
   ProductModel.create(reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else {
           res.status(200).json({status:"success",data:data})
       }
   })
}

// R=Read
exports.SelectProduct=(req,res)=>{
    // let Query={};
    // let Projection="name brand"
    ProductModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
    // ProductModel.find(Query,Projection,(err,data)=>{
    //     if(err){
    //         res.status(400).json({status:"fail",data:err})
    //     }
    //     else {
    //         res.status(200).json({status:"success",data:data})
    //     }
    // })
}

// U=Update
exports.EditProduct=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    let reqBody= req.body;
    ProductModel.updateOne(QUERY,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"faild update",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// D=Delete
exports.DeleteProduct=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    ProductModel.remove(QUERY,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}




