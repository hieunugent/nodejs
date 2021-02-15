const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=ff9c080b004a2153991e1f3efc0c8661&query=Anaheim&units=f"

const request =http.request(url, (response)=> {
    let data = ''
    response.on('data', (chunk)=> {
        data = data + chunk.toString()
    })
    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body);
    })
    
})
request.on('error', (error)=> {
    console.log('An Error', error);
})

request.end() 