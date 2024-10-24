const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /api/register - Register a new user
router.post('/register', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    gender,
    programType,
    startDate,
    agreeToTerms,
  } = req.body;

  // Validate required fields
  if (!fullName || !email || !phone || !gender || !programType || !agreeToTerms) {
    return res.status(400).json({ message: 'All required fields must be filled.' });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Create new user
    const newUser = new User({
      fullName,
      email,
      phone,
      gender,
      programType,
      startDate,
      agreeToTerms,
    });

    // Save user to the database
    await newUser.save();

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
