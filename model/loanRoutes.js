// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024

const express = require('express');
const router = express.Router();
const loanController = require('./loanController');

router.get('/loans', loanController.getAllLoans);

module.exports = router;
