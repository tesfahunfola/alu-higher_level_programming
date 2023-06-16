#!/usr/bin/node
const fs = require('fs');

// Get the file path and string to write from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Use the fs.writeFile function to write the file asynchronously
fs.writeFile(filePath, content, 'utf-8', (err) => {
  // The callback function is executed once the file writing is complete
  if (err) {
    // If an error occurred, log the error object to the console
    console.error(err);
  } else {
    // If no error occurred, log a success message to the console
    console.log(`Successfully wrote to ${filePath}`);
  }
});
