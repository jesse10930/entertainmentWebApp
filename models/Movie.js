// Import mongoose for db interaction
const mongoose = require('mongoose');

// Create schema for user object
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  movies: {
    type: Array,
    default: [],
  },
  series: {
    type: Array,
    default: [],
  },
});

// Export for use in other files
module.exports = mongoose.model('User', UserSchema);
