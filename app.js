const express = require('express');
const loanRoutes = require('./model/loanRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/loans', loanRoutes);

module.exports = app;
