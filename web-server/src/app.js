

const express = require('express')

console.log(__dirname);
console.log(__filename);

const app = express()

app.get('', (req, res)=> {
    res.send('<h1>Hello express<h1>')
})
app.get('/help', (req, res)=> {
    res.send([{name: "Henry"}, {name:"Rynnie"}])
})
app.get('/about', (req, res)=> {
    res.send('<title> About </title>')
})
app.get('/weather', (req, res)=> {
    res.send({
        forecast: "snow wet",
        location:"Anaheim"
    })
})
app.listen(3000, ()=> {
    console.log('Server is up on port 3000');
})