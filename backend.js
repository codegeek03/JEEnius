const { google } = require('googleapis');

// Load the credentials from your credentials file
const credentials = require('./credentials.json');


// Specify the ID of the Google Sheet
const spreadsheetId = '1QiqlZU3J83ZGj_LdbRkYvwKRl4V0kPBxXS_jv_KsiAY';

// Authenticate using the credentials
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// Create a client to interact with the Google Sheets API
const sheets = google.sheets({ version: 'v4', auth });

// Function to check if the email and phone number match the data in the Google Sheet
async function checkCredentials(email, phone) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!C2:D', // Adjust the range to match your sheet
    });

    const rows = response.data.values;
    if (rows.length) {
      for (const row of rows) {
        const sheetEmail = row[0];
        const sheetPhone = row[1];

        if (sheetEmail === email && sheetPhone === phone) {
          return true; // Credentials match
        }
      }
    }
  } catch (error) {
    console.error('Error reading Google Sheet:', error);
  }

  return false; // Credentials do not match
}

// Example usage
async function login(email, phone) {
  const isValidCredentials = await checkCredentials(email, phone);

  if (isValidCredentials) {
    console.log('Login successful');
  } else {
    console.log('Invalid credentials');
  }
}

// Call the login function with the email and phone number
login('example@example.com', '1234567890');
