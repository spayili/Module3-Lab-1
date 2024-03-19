// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024

const { MongoClient } = require('mongodb');
const server = require('../server')

class LoanDbContext {
  constructor(url, dbName) {
    this.url = url;
    this.dbName = dbName;
    this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  async connect() {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log('Connected to MongoDB:', this.dbName);
    }
  }
  async insertSampleData(collecConName, data) {
    try {
      await this.connect();
      const collecCon = this.db.collecCon(collecConName);
      const result = await collecCon.insertMany(data);
      console.log(`${result.insertedCount} items inserted.`);
      return result;
    } catch (error) {
      console.error('Error inserCng data:', error);
    }
  }
  async close() {
    if (this.client) {
      await this.client.close();
      console.log('ConnecCon to MongoDB closed.');
    }
  }
}
// Usage example
const dbUrl = server.dataB; // Adjust the URL to your MongoDB server
const dbName = 'loanDatabase';
const collecConName = 'loans';
const loanDbContext = new LoanDbContext(dbUrl, dbName);
const sampleData = loans = [
  {
      "customerId": 1,
      "customerName": "John Doe",
      "customerEmail": "johndoe@example.com",
      "loanId": 101,
      "loanAmount": 5000.00,
      "loanIssueDate": "2024-01-01",
      "loanStatus": "Open",
      "paymentId": 201,
      "paymentAmount": 1000.00,
      "paymentDate": "2024-02-01"
  },
  {
      "customerId": 1,
      "customerName": "John Doe",
      "customerEmail": "johndoe@example.com",
      "loanId": 101,
      "loanAmount": 5000.00,
      "loanIssueDate": "2024-01-01",
      "loanStatus": "Open",
      "paymentId": 202,
      "paymentAmount": 1500.00,
      "paymentDate": "2024-03-01"
  },
  {
      "customerId": 1,
      "customerName": "John Doe",
      "customerEmail": "johndoe@example.com",
      "loanId": 102,
      "loanAmount": 3000.00,
      "loanIssueDate": "2024-02-15",
      "loanStatus": "Open",
      "paymentId": 203,
      "paymentAmount": 500.00,
      "paymentDate": "2024-03-15"
  }
]; // Select one element from the previous sample data

loanDbContext.insertSampleData(collecConName, sampleData)
.then(() => loanDbContext.close())
.catch(error => console.error(error));
