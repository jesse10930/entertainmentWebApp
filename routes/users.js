// import express for backend
// declare router to make requests
// import bcrypt in order to hash user's password on server
// import jwt in order to give authorization to client after successful authentication
// import config to allow multiple routes to access database
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  // Express validator checks that all fields filled out properly
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // check if validation results errors array is empty
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure body, declare movies and series array
    const { email, password } = req.body;
    const movies = [];
    const series = [];

    try {
      // Check if email exists in database, return error message if so
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
      }

      // Declare new user object
      user = new User({
        email,
        password,
        movies,
        series,
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // declare payload from db id
      const payload = {
        user: {
          id: user.id,
        },
      };

      // get a token for user from jsonWebToken
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// export router so that other files are allowed to access it
module.exports = router;
