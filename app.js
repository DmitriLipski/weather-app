const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode("Minsk", (error, data) =>{
   console.log("Error", error);
   console.log("Data", data);
});

forecast(27.56184, 53.90225, (error, data) => {
    if (error) {
        console.log("Error", error);
        return
    }
    console.log(data.summary + ' It is currently ' + data.temperature + ' degress out. There is a ' + data.precipProbability + '% chance of rain.')
});


