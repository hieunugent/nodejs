const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address){
 console.log();
}else{
    geocode(address, (error, {location})=> {
        if (error){
            return console.log(error);
        }
    
        forecast(location, (error, forcastData) => {
            if(error){
                return   console.log(error)
            }
            console.log(location);
            console.log(forcastData)
          })
    })
}



