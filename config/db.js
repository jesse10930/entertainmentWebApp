// Import mongoose for MongoDB interaction
// Import config to get MongoURI key
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connect to MongoDB with async try/catch. Mongoose returns a promise.
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
