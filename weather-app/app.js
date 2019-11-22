const request = require('request');
// const url = 'https://api.darksky.net/forecast/de1168c6312c70da6fc42dfd9fe6ea25/37.8267,-122.4233?lang=hi'
// request({ url: url, json: true}, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' it is currently ' + response.body.currently.temperature + 'degrees out.' + ' There is a ' + response.body.currently.precipProbability + '% chance of rain')
    

// })
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1IjoiYW5raXRhMSIsImEiOiJjazM4a3p2YmYwMDl2M2NwNHI1aWlncXViIn0.fPC5S8v3PBGhkrmi0Jpf6g'
request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('network not found')
    } else  if (response.body.features.length===0) {
        console.log('unable to find the data')

    } else {
        console.log('Longitude is ' + response.body.features[0].center[0] + ' and latitude' + response.body.features[0].center[1]);

    }
    
})