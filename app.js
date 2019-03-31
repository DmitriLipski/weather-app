const request = require('request');
const gecode = require('./utils/geocode');

const url = 'https://api.darksky.net/forecast/90bca0723f568b56588333faa7d586c2/37.8267,-122.4233?units=si';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// });

gecode("Minsk", (error, data) =>{
   console.log("Error", error);
   console.log("Data", data);
});


