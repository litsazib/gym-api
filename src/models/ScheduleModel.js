const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    
    member_id:{
        type:Number,
        unique:true,
        required:[true, "member id a required field"]
    },
    dow:{
        type:String,
        required:[true, "member id a required field"]
    },
    date_from:{
        type: Date,
        trim: true,
        default: Date.now
    },
    date_to:{
        type: Date,
        trim: true,
        required:[true, "date-to is a required field"]
    },
    time_from:{
        type: Date,
        trim: true,
        default: Date.now
    },
    time_to:{
        type: Date,
        trim: true,
        required:[true, "time_to is a required field"]
    }
    
},{versionKey:false})

const  ScheduleModel= mongoose.model('schedules',DataSchema);
module.exports=ScheduleModel;
