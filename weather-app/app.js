const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=ff9c080b004a2153991e1f3efc0c8661&query=Anaheim&units=f"

request({url:url, json:true}, (error, response)=> {
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    // console.log(response.body.current);
    if(error){
        console.log("Unable to connect to service");

    }else if (response.body.error){
        console.log("Unable to find location");

    }else{
        console.log(response.body.current.weather_descriptions[0] +'. It is currently '+ response.body.current.temperature + " degress out. but feelsLike " + response.body.current.feelslike );

    }

})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGlldW51Z2VudCIsImEiOiJja2t6Mzg4MXYwY3ZuMm5wNWhpM3E2cG02In0.4Yzl6Z_fB6Q2ZUnHZR5jdA"
request({url:geocodeURL, json:true}, (error, res)=> {
    if(error){
        console.log("Unable to connect to service");
    }else if (res.body.features.length === 0){
        console.log("Unable to find location, try another Search")
    }else{
        const latitude = res.body.features[0].center[0]
        const longitude = res.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})