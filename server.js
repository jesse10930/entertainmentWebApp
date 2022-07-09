// import express
// import database connection function
const express = require('express');
const connectDB = require('./config/db');

// declare app for express backend
const app = express();

// Connect Database
connectDB();

// Init middleware to handle requests
app.use(express.json({ extended: false }));

// temp get request to check if server runs
app.get('/', (req, res) => res.json({ msg: 'Hello World' }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// declare port
const PORT = process.env.PORT || 5000;

// launch server on PORT, display message if successful
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
