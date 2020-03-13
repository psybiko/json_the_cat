const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

  
    const data = JSON.parse(body);
    if (data[0] === undefined || data.length === 0) {
      callback(null);
    } else {
      callback(null,data[0].description.trim());
    }
  });
  
};


module.exports = { fetchBreedDescription };
