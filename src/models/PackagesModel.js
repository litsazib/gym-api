const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const DataSchema = mongoose.Schema({
    package:{
        type:String,
        unique:true,
        required:[true, "package is a required field"],
    },
    description:{
        type:String,
        required:[true, "package is a required field"],
    },
    amount:{
        type: Float
    }
    
},{versionKey:false})

const  PackagesModel= mongoose.model('packages',DataSchema);
module.exports=PackagesModel;
