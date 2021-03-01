const express= require('express')

require('./db/mongoose')
//
// without middle ware : new request -> run route handle 
//
// with middleware new request -> do something -> run route handler
//

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()

const port = process.env.PORT || 3000
// app.use((req, res, next)=> {
//    if (req.method === 'GET'){
//         res.send('GET request are diable')
//    }else{
//      next()
//    }
// })

// set up middle ware for maintenance mode
// app.use((req, res, next)=> {
//       res.status(503).send('site is currently down. check back soon ')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
    console.log('connect to server: '+port);
})
// const jwt = require('jsonwebtoken')
// const myFunction = async() => {
//   const token = jwt.sign({_id:"hieuNguyen1122"}, "thisismysecret")
//   console.log(token);
//   const data = jwt.verify(token, "thisismysecret")
//   console.log(data);
// }
// myFunction()

