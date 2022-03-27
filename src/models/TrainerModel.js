const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const DataSchema = mongoose.Schema({
    
    name:{
        type:String,
        unique:true,
        minlength: 3,
        required:[true, "name is a required field"],
        validate: {
           validator: function (v) {
               return /^[a-zA-Z]+$/.test(v);
           },
           message: 'name must have letters only!'
       }
    },
    contact:{
        type: String,
        match:[/(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/,'Please fill a valid mobile number']
    },
    email: {
        type: String,
        unique:true,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    rate:{
        type: Float
    }
    
},{versionKey:false})

const  TrainerModel= mongoose.model('trainers',DataSchema);
module.exports=TrainerModel;
