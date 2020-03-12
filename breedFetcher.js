const request = require('request');
const args = process.argv.slice(2);
const rl = require('readline');

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data[0] === undefined || body === []) {
    console.log("Breed not found")
  } else {
    console.log(data[0].description.trim())

  }
});