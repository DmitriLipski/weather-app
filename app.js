const request = require('request');

const url = 'https://api.darksky.net/forecast/90bca0723f568b56588333faa7d586c2/37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently)
});