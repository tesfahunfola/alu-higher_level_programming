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
    const characterUrls = movie.characters;

    // Create an array to store the character names
    const characterNames = [];

    // Function to fetch a character's details
    const fetchCharacter = (url) => {
      request.get(url, (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          characterNames.push(character.name);

          // Check if all characters have been fetched
          if (characterNames.length === characterUrls.length) {
            // Print the character names in the same order as the characterUrls list
            characterUrls.forEach((url) => {
              const characterId = url.split('/').slice(-2, -1)[0];
              const characterName = characterNames[characterId - 1];
              console.log(characterName);
            });
          }
        }
      });
    };

    // Fetch details for each character in the movie
    characterUrls.forEach((url) => fetchCharacter(url));
  }
});
