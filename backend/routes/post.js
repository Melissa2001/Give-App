const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Route: /api/posts
// Method: POST
// Description: Create a new post
router.post('/', async (req, res) => {
  try {
    const { image, content } = req.body;

    // Create a new post object
    const newPost = new Post({
      image,
      content
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the post' });
  }
});

module.exports = router;
