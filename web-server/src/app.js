
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname,'../template/partials' )

const port = process.env.PORT || 3000



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
         helpText : "This is the line of help text"

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
    if(!req.query.address){
        return res.send({
            error:'You must provide an address !'
        })
    }
    geocode(req.query.address, (error, {location}={})=> {
        if(error){
            return res.send({error})
        }
        forecast(location, (error, forecastData)=>{
            if (error){
                return  res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
        
    })
    // res.send({
    //     forecast: "snow wet",
    //     location:"Anaheim",
    //     address:req.query.address,
    // })




})
app.get('/products', (req, res)=> {
    if(!req.query.search){
        return  res.send({
            error:'you must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products:[]
    })
})
app.get('*', (req, res)=> {
    res.render('404', {
        title:'404',
        name: 'Henry Nugent',
        errorMessage:'Page is Not found'
    })
})
app.listen(port, ()=> {
    console.log('Server is up on port 3000');
})