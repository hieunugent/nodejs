const express= require('express')

require('./db/mongoose')

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
    console.log('connect to server: '+port);
})
const jwt = require('jsonwebtoken')
const myFunction = async() => {
  const token = jwt.sign({_id:"hieuNguyen1122"}, "thisismysecret")
  console.log(token);
  const data = jwt.verify(token, "thisismysecret")
  console.log(data);
}
myFunction()

