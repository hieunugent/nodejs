const request = require('request')

const forecast =(location, callback)=> {
    const url = "http://api.weatherstack.com/current?access_key=ff9c080b004a2153991e1f3efc0c8661&query=" + location + "&units=f"
    request({url:url, json:true}, (error, response)=> {
        // const data = JSON.parse(response.body)
        // console.log(data.current);
        // console.log(response.body.current);
        if(error){
            callback("Unable to connect to service", undefined);
    
        }else if (response.body.error){
            callback("Unable to find location", undefined);
    
        }else{
            callback(undefined, response.body.current.weather_descriptions[0] +'. It is currently '+ response.body.current.temperature + " degress out. but feelsLike " + response.body.current.feelslike );
    
        }
    
    })
}

module.exports = forecast

