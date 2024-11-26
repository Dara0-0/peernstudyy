const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware for authentication (can be Passport or JWT-based)
const authenticate = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

// Route to create or update user profile
router.post('/register', authenticate, async (req, res) => {
  const {
    idNumber, sex, age, fullName, courseYearLevel, college,
    contactNumber, ucEmail, availability, selectedCourses
  } = req.body;

  try {
    let user = await User.findOne({ idNumber });
    if (user) {
      // Update user profile if it already exists
      user = await User.findByIdAndUpdate(
        user._id,
        { idNumber, sex, age, fullName, courseYearLevel, college, contactNumber, ucEmail, availability, selectedCourses },
        { new: true }
      );
    } else {
      // Create a new user profile
      user = new User({
        idNumber, sex, age, fullName, courseYearLevel, college,
        contactNumber, ucEmail, availability, selectedCourses
      });
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error registering/updating user profile', error });
  }
});

// Route to get user profile (with selected courses and availability)
router.get('/profile', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user profile' });
  }
});

module.exports = router;
