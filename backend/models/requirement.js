const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true
  },
  organizationId:{
    type:String,
    required:true
  },
  requirement: {
    type: String,
    required: true
  }
});

requirementSchema.virtual('id').get(function (){
    return this._id.toHexString();
});

requirementSchema.set('toJSON',{
    virtuals:true,
});

const Requirement = mongoose.model('requirements', requirementSchema);

module.exports = Requirement;
