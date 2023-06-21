const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
        type:Boolean,
        default:false,
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