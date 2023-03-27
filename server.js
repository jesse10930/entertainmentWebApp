// import express
// import database connection function
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// declare app for express backend
const app = express();

// Connect Database
connectDB();

// Init middleware to handle requests
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '/client', 'build', 'index.html')))
}

// declare port
const PORT = process.env.PORT || 5000;

// launch server on PORT, display message if successful
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
