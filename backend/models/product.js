const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
      type: String,
      required: false
    },
    brand: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    countInStock: {
      type: Number,
      default:1,
      required: true
    },
    Audience:{
      type:String,
      default:"Common Use",
      required:true
    },
    userId:{
      type:String,
      required:true
    }
  });

productSchema.virtual('id').get(function (){
    return this._id.toHexString();
});

productSchema.set('toJSON',{
    virtuals:true,
});

const Product = mongoose.model('products', productSchema);
  
  module.exports = Product;