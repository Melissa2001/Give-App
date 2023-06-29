const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      password:{
        type:String,
        required:false
      },
      description: {
        type: String,
        required: false
      },
    reg_no: {
      type: String,
      required: true
    },
    Phone_no: {
      type: Number,
      required: false
    },
    email_id: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    upi_id:{
      type:String,
      required:false
    },
    requirement:{
        type:Number,
        default:0,
      },
  });

organizationSchema.virtual('id').get(function (){
    return this._id.toHexString();
});

organizationSchema.set('toJSON',{
    virtuals:true,
});

const Organization = mongoose.model('organizations', organizationSchema);
  
  module.exports = Organization;