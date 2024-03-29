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
const auth = require('../middleware/auth');

// Import User model from database
const User = require('../models/User');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // find user by id and return info minus password
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    // return error message if not found
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authorize user and get token
// @access  Public
router.post(
  '/',
  // Express validator checking for proper user input
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    // check if validation results errors array is empty
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure body
    const { email, password } = req.body;

    try {
      // Find user's email in database
      let user = await User.findOne({ email });

      // Return error if not found
      if (!user) {
        return res.status(400).json({ msg: 'Email not found' });
      }

      // Check entered password matches hashed password in db, return error if not
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ msg: 'Password incorrect for entered email' });
      }

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

// @route PUT api/auth/
// @desc  Add/Remove movie or series to bookmark list
// @access Private
router.put('/', auth, async (req, res) => {
  let newUser = req.body;
  let newUserMovies = req.body.movies;
  let newUserSeries = req.body.series;

  try {
    let user = await User.findByIdAndUpdate(
      newUser._id,
      { movies: newUserMovies, series: newUserSeries },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/auth/:id
// @desc  Delete user
// @access Private
// router.delete('/:id', auth, async (req, res) => {
//   // Delete a user's profile from the database
//   try {
//     await User.findByIdAndRemove(req.params.id);

//     res.json({ msg: 'User Removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// export router so that other files are allowed to access it
module.exports = router;
