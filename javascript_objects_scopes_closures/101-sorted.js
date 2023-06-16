#!/usr/bin/node
const { dict } = require('./101-data');

// Create a new dictionary of user ids by occurrence
const result = {};
for (const [userId, occurrence] of Object.entries(dict)) {
  if (result[occurrence]) {
    result[occurrence].push(userId);
  } else {
    result[occurrence] = [userId];
  }
}

// Print the new dictionary
console.log(result);
