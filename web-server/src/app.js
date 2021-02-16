
const path = require('path')
const express = require('express')
const hbs = require('hbs')
console.log(__dirname);
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname,'../template/partials' )

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=> {
    res.render('index' ,{
        title :'Weather',
        name:'Henry Nugent'

    })
})
app.get('/help', (req, res)=> {
    res.render('help' ,{
        title :'HELP',
         helpText = "This is the line of help text"

    })
})
app.get("/help/*", (req, res)=> {
    res.render("404",{
        title:'404',
        name:'Henry Nguyen',
        errorMessage:"help artical does not found"
    })
})
app.get('/about', (req, res)=> {
    res.render('about' ,{
        title :'About',
        name:"Henry Nguyen"

    })
})
app.get('/weather', (req, res)=> {
    res.send({
        forecast: "snow wet",
        location:"Anaheim"
    })
})
app.get('*', (req, res)=> {
    res.render('404', {
        title:'404',
        name: 'Henry Nugent',
        errorMessage:'Page is Not found'
    })
})
app.listen(3000, ()=> {
    console.log('Server is up on port 3000');
})