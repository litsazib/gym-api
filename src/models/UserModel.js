const mongoose = require('mongoose');
const bcrypt = require('bcrypt'),SALT_WORK_FACTOR = 10;

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


DataSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    //if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


const  UserModel= mongoose.model('users',DataSchema);
module.exports=UserModel;



