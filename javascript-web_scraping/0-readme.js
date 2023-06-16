#!/usr/bin/node
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Use the fs.readFile function to read the file asynchronously
fs.readFile(filePath, 'utf-8', (err, data) => {
  // The callback function is executed once the file reading is complete
  if (err) {
    // If an error occurred, log the error object to the console
    console.error(err);
  } else {
    // If no error occurred, log the file content to the console
    console.log(data);
  }
});
