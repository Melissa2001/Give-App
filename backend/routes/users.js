const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        // User not found
        return res.status(400).json({ success: false, message: 'User not found' });
      }
  
      // Check if the password matches
      if (user.password !== password) {
        // Invalid password
        return res.status(400).json({ success: false, message: 'Invalid password' });
      }
  
      // User found and password is correct
      res.status(200).json({ success: true, message: 'Login successful', user });
    } catch (error) {
      // Error occurred during login
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred during login' });
    }
  });

  module.exports =router;