const express = require('express');
const College = require('../models/College');
const Course = require('../models/Course');
const router = express.Router();

// Route to get all colleges with their courses
router.get('/colleges', async (req, res) => {
  try {
    const colleges = await College.find().populate('courses');
    res.json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
