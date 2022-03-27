const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const DataSchema = mongoose.Schema({
    plan:{
        type:Number,
        unique:true,
        required:[true, "plan is a required field"],
    },
    amount:{
        type: Float
    }
    
},{versionKey:false})

const  PlansModel= mongoose.model('plans',DataSchema);
module.exports=PlansModel;
