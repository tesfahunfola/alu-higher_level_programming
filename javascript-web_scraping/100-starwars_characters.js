#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Make a GET request to the Star Wars API to fetch the movie details
request.get(`https://swapi.dev/api/films/${movieId}/`, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characters = movie.characters;
    let characterCount = 0;

    // Iterate over the character URLs and fetch each character's details
    characters.forEach((characterUrl) => {
      request.get(characterUrl, (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
          characterCount++;

          // Check if all characters have been printed
          if (characterCount === characters.length) {
            console.log('[Expected]\nOK');
          }
        }
      });
    });
  }
});
