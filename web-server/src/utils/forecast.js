const request = require('request')

const forecast =(location, callback)=> {
    const url = "http://api.weatherstack.com/current?access_key=ff9c080b004a2153991e1f3efc0c8661&query=" + location + "&units=f"
    request({url, json:true}, (error, {body})=> {
        // const data = JSON.parse(response.body)
        // console.log(data.current);
        // console.log(response.body.current);
        if(error){
            callback("Unable to connect to service", undefined);
    
        }else if (body.error){
            callback("Unable to find location", undefined);
    
        }else{
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently '+ body.current.temperature 
            + " degress out. but feelsLike " + body.current.feelslike  
            + " Humidity is " + body.current.humidity + "%");
    
        }
    
    })
}

module.exports = forecast

