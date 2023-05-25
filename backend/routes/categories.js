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


  module.exports =router;