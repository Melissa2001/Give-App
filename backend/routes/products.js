const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route for searching products
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
    console.error(error);
    res.status(500).json({ error: 'An error occurred while searching for products' });
  }
});

// Route for adding a new product
router.post('/sell', async (req, res) => {
  try {
    const { categoryId, type, title, description, targetAudience } = req.body;

    const product = new Product({
      category: categoryId,
      brand: type,
      name: title,
      description,
      audience: targetAudience,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route for getting products by category
router.get('/sections', async (req, res) => {
  try {
    const { category } = req.query;

    const products = await Product.find({ category });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
