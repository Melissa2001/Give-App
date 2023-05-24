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
  
  module.exports = router;