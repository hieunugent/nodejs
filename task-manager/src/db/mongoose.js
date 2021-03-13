const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true ,
    useFindAndModify:false
})




// const task = new Task({
//     description:'Learn API',
//     completed: true
// })
// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log('Error: ', error);
// })
// const me = new User({
//     name: 'Henry',
//     email:'lhdja@',
//     age:34

// })
// me.save().then(()=> {
//     console.log(me);
// }).catch((error)=> {
//     console.log('Error !:', error);
// })