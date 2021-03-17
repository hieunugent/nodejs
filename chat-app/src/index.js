const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
let count = 0 


io.on('connection', (socket) =>{
    console.log('New Websocket connection')
    
    socket.on('join', ({username, room})=> {
        socket.join(room)
        //socket.emit, io.emit, socket.broadcast.emit
        socket.emit('message',generateMessage('Welcome!!!') )
        socket.broadcast.to(room).emit('message', generateMessage(`${username} has joined`))



    })
    socket.on('sendMessage', (message,callback)=> {
        const filter = new Filter()
        if(filter.isProfane(message)){
            return callback('Profainity is not allowed')
        }
        io.to('Center City').emit('message', generateMessage(message))
        callback()
    })
    socket.on('sendLocation', (coords,callback)=> {
        io.emit('locationMessage', generateMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })
    socket.on('disconnect', ()=> {
        io.emit('message',generateMessage('A User has left'))
    })
    // socket.emit('countUpdated', count )
    // socket.on('increment', ()=> {
    //     count++
    //     //  socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)

    // })

})


server.listen(port, ()=> {
    console.log(`server is up on ${port}!`)
})