const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
  const formData = req.body; // Assuming you are using body-parser or similar middleware to parse the request body
  const dataPath = path.join(__dirname, 'data.json');

  // Read existing data from the file
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data file');
    }

    let existingData = [];
    if (data) {
      existingData = JSON.parse(data);
    }

    // Add the new form data to the existing data
    existingData.push(formData);

    // Write the updated data back to the file
    fs.writeFile(dataPath, JSON.stringify(existingData), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing data file');
      }

      res.status(200).send('Form data stored successfully');
    });
  });
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(80, () => {
  console.log('Server is running on port 3000');
});
