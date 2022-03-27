const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    
    member_id:{
        type:Number,
        unique:true,
        required:[true, "member id is a required field"]
    },
    plan_id:{
        type:String,
        unique:true,
        required:[true, "plan id is a required field"]
    },
    package_id:{
        type:String,
        unique:true,
        required:[true, "package id is a required field"]
    },
    trainer_id:{
        type:String,
        unique:true,
        required:[true, "trainer id is a required field"]
    },
    status:{
        type: Number,
        required:[true, "status is a required field"],
            enum: {
              values: [0,1],
              message: '{VALUE} is valid code ,use only 0 OR 1'
          }
    },
    start_date:{
        type: Date,
        trim: true,
        default: Date.now
    },
    end_date:{
        type: Date,
        trim: true,
        default: Date.now
    },
    date_created:{
        type: Date,
        trim: true,
        default: Date.now
    }
    
},{versionKey:false})

const  RegistrationModel= mongoose.model('registrations',DataSchema);
module.exports=RegistrationModel;
