const mongoose= require('mongoose')
const DataSchema= mongoose.Schema({
    name:{type:String,unique:true},
    brand:{type:String},
    variant:{type:String},
    shop:{type:String},
    price:{type:Number},
},{versionKey:false})
const  ProductModel= mongoose.model('products',DataSchema);
module.exports=ProductModel;

