const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

categorySchema.virtual('id').get(function (){
    return this._id.toHexString();
});

categorySchema.set('toJSON',{
    virtuals:true,
});
const Category = mongoose.model('categories', categorySchema);

module.exports = Category;