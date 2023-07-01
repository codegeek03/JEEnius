// Node.js server-side code (using Express.js and MongoDB)

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const filePath = 'C:\\Users\\shami\\OneDrive\\Documents\\GitHub\\Jeenius\\';
// Use double backslashes (\\) to escape backslashes in the file path

// Rest of your code...


app.use(bodyParser.json());

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

app.post('/checkData', (req, res) => {
  // Extract email and phone from the request body
  const { email, phone } = req.body;

  // Connect to MongoDB
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).json({ error: 'An error occurred while connecting to the database.' });
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('users');

    // Check if email or phone exists in the collection
    collection.findOne({ $or: [{ email }, { phone }] }, (err, result) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'An error occurred while querying the database.' });
      } else {
        const exists = !!result; // Convert result to a boolean value
        res.status(200).json({ exists });
      }

      client.close();
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
