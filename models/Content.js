// Import mongoose for db interaction
const mongoose = require('mongoose');

// Create schema for user object
const ContentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

// Export for use in other files
module.exports = mongoose.model('Content', ContentSchema);
