const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
         type:String,
         required:false,
    },
    email:{
        type:String,
        required:true,
   },
   password:{
    type:String,
    required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    regNo:{
        type:Number,
        default:0
    },
    phone:{
        type:Number,
        default:0
    },
})

userSchema.virtual('id').get(function (){
    return this._id.toHexString();
});

userSchema.set('toJSON',{
    virtuals:true,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
