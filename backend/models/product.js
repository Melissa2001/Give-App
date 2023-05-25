const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    isFeatured: {
      type: Boolean,
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
      required: true
    },
    __v: {
      type: Number,
      default: 0
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