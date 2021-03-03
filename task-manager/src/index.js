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

const  Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('603e9e405c10dd46117a9dc1')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('603e9e385c10dd46117a9dbf')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()