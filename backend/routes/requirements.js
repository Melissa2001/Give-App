const express = require('express');
const router = express.Router();
const Requirement = require('../models/requirement');

// POST route to create a new requirement
router.post('/', async (req, res) => {
  try {
    const { organizationId, organizationName, requirement } = req.body;

    // Create a new requirement object
    const newRequirement = new Requirement({
      organizationId,
      organizationName,
      requirement,
    });

    // Save the requirement to the database
    const savedRequirement = await newRequirement.save();

    res.status(201).json(savedRequirement);
  } catch (error) {
    console.error('Error creating requirement:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
    try {
      const requirements = await Requirement.find();
      res.status(200).json(requirements);
    } catch (error) {
      console.error('Error fetching requirements:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
