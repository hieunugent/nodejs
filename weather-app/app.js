const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode("Anaheim", (error, data)=> {
    console.log('Error', error);
    console.log('Data', data);
    forecast(data.location, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
})

