const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const DataSchema = mongoose.Schema({
    
    member_id:{
        type:Number,
        unique:true
    },
    firstname:{
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
    middlename:{
         type:String,
    },    
    lastname:{
        type:String,
        required:[true, "name is a required field"]
    },
    gender:{
        type: String,
        required:[true, "gender is a required field"],
        enum: {
          values: ['male','female'],
          message: '{VALUE} is wrong!'
      }
    },
    contact:{
        type: String,
        match:[/(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/,'Please fill a valid mobile number']
    },
    address:{
        type:String,
    },
    email: {
        type: String,
        unique:true,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    date_created:{
        type: Date,
        trim: true,
        default: Date.now
    }
    
},{versionKey:false})

const  MembersModel= mongoose.model('members',DataSchema);
module.exports=MembersModel;
