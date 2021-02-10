const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=3cc944f872d1b00aa07cdef69a552a6b&query=Anaheim&units=f"

request({url:url, json:true}, (error, response)=> {
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] +'. It is currently '+ response.body.current.temperature + " degress out. but feelsLike " + response.body.current.feelslike );

})