const app = require('./app')

const port = process.env.PORT


app.listen(port, ()=> {
    console.log('connect to server with: '+port);
})









// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('please upload word document'))
//         }
//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)

//     }
// })

// const errorMiddleware = (req, res, next)=> {
//     throw new Error('From my middleware')
// }
// app.post('/upload',upload.single('upload'),  (req, res)=> {
//     res.send()
// }, (error, req, res, next)=>{
//     res.status(400).send({error:error.message})
// })




// const jwt = require('jsonwebtoken')
// const myFunction = async() => {
//   const token = jwt.sign({_id:"hieuNguyen1122"}, "thisismysecret")
//   console.log(token);
//   const data = jwt.verify(token, "thisismysecret")
//   console.log(data);
// }
// myFunction()

// const  Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('603e9e405c10dd46117a9dc1')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('603e9e385c10dd46117a9dbf')
//     await user.populate('tasks').execPopulate()
    
//     console.log(user.tasks)
// }
// main()