const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/90bca0723f568b56588333faa7d586c2/${latitude},${longitude}?units=si`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', null)
        } else if (response.body.error) {
            callback('Unable to find location', null)
        } else {
            callback(null, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            })
        }
    })
};

module.exports = forecast;
