// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024

const Loan = require('../model/loanModel');
const { LoanDbContext } = require('../dataBaseManager/loanDbContext');
const server = require('../server')

const dbUrl = server.dataB;
const dbName = 'loanDatabase';
const collecLonName = 'loans';
const loanDbContext = new LoanDbContext(dbUrl, dbName);

exports.saveData = async (req, res) => {
  try {
  // Connect to the database
  await loanDbContext.connect();
  // Fetch the loans using the getLoans method of LoanDbContext
  const loans = await loanDbContext.getLoans(collecLonName);
  res.json(loans);
  } catch (error) {
  console.error('Failed to fetch loans:', error);
  res.status(500).send('Internal Server Error');
  } finally {
  // Ensure the database connecLon is closed aXer the request
  await loanDbContext.close();
  }
};
  

exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json({
      status: 'success',
      data: {
        loans
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

