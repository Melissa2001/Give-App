const Category = require('../models/category');
const express = require('express');
const router = express.Router();

router.post('/add', async (req, res) => {
    let category=new Category({
        name:req.body.name,
        })
    
        category=await category.save();
        if(!category)
        return res.status(400).send('Category Cannot be added');
    
        res.send(category);
  });

  router.get('/', async (req, res) => {
    try {
      const { name } = req.query;
      const category = await Category.findOne({ name }); // Assuming your category model is defined and imported as Category
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.status(200).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  module.exports =router;