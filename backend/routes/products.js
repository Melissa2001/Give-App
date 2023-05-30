const Product = require('../models/product');
const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
      const { query } = req.query;
  
      // Perform the search query using a regular expression (case-insensitive)
      const products = await Product.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
        ],
      });
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while searching for products' });
    }
  });

  router.post('/sell', async (req, res) => {
    let product=new Product({
        category:req.body.categoryId,
        brand:req.body.type,
        name:req.body.title,
        description:req.body.description,
        Audience:req.body.targetAudience,
        })
    
        product=await product.save();
        if(!product)
        return res.status(400).send('Product Cannot be created');
    
        res.send(product);;
  });

  
  module.exports = router;