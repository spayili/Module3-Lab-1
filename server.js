// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loanRoutes = require('./model/loanRoutes');

dotenv.config({ path: './.env' });

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', loanRoutes);

// MongoDB connection
const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

exports.dataB = DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connection successful'))
  .catch(err => console.error('Database connection failed:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
