// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024

const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customerId: Number,
  customerName: String,
  customerEmail: String,
  loanId: Number,
  loanAmount: Number,
  loanIssueDate: Date,
  loanStatus: String,
  paymentId: Number,
  paymentAmount: Number,
  paymentDate: Date
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
