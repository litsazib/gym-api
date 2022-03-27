const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const DataSchema = mongoose.Schema({
    registration_id:{
        type:String,
        unique:true,
        required:[true, "registration is a required field"]
    },
    amount:{
        type: Float,
        required:[true, "amount is a required field"],
    },
    remarks:{
        type: String
    },
    type:{
        type: Number,
        required:[true, "type is a required field"],
            enum: {
              values: [1,2],
              message: '{VALUE} is not valid code ,use only 1 OR 2'
          }
    },
    date_created:{
        type: Date,
        trim: true,
        default: Date.now
    }
    
},{versionKey:false})

const  PaymentModel= mongoose.model('payments',DataSchema);
module.exports=PaymentModel;
