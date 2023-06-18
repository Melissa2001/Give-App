const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.post('/add', async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({ name });

    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { name } = req.query;

    const category = await Category.findOne({ name });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
