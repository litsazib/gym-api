const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const DataSchema= mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress: {
        type: String,
        unique:true,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    MobileNumber:{
        type: String,
        validate:{
            validator: function(value) {
              if(value.length ===11) {
                  return true
              }else {
                  return false
              }
            },
            message: "You must provide 11 digit valid mobile number!"
        }
    },
    UserName:{type:String,unique:true,trim:true},
    password:{
    type:String,
    required:[true, "Password is a required field"]
    }
    
    
    
},{versionKey:false})

const  ProfileModel= mongoose.model('Profiles',DataSchema);
module.exports=ProfileModel;