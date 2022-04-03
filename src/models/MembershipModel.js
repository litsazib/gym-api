const mongoose = require('mongoose');

const DataSchema= mongoose.Schema({
    name:{
        type:String,
        minlength: 3,
        required:[true, "name is a required field"],
        validate: {
           validator: function (v) {
               return /^[a-zA-Z]+$/.test(v);
           },
           message: 'name must have letters only!'
       }
    },
    username:{
        type:String,
        unique:true,
        required:[true, "User Name is a required field"]
    },
    password:{
        type:String,
        minlength: 6,
        required:[true, "Password is a required field"]
    },
    type:{
        type: Number,
        required:[true, "Use type is a required field"],
        enum: {
          values: [1,2,3],
          message: '{VALUE} is not supported max number is 3'
      },
      trim: true, 
    }
},{versionKey:false})



const  MembershipModel= mongoose.model('memberships',DataSchema);
module.exports=MembershipModel;



