const request = require('request')


const geocode = (address, callback)=> {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiaGlldW51Z2VudCIsImEiOiJja2t6Mzg4MXYwY3ZuMm5wNWhpM3E2cG02In0.4Yzl6Z_fB6Q2ZUnHZR5jdA"
    request({url, json:true}, (error, {body})=> {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if (body.features.length===0){
            callback('Unable to find the location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude:body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode