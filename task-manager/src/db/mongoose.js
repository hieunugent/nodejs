const mongoose = require('mongoose')
const { boolean } = require('yargs')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
})
const User = mongoose.model('User', {
    name:{
        type: String
    },
    age:{
        type: Number
    }
})
const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type: Boolean
    }
})
const task = new Task({
    description:'Learn API',
    completed: true
})
task.save().then(()=>{
    console.log(task);
}).catch((error)=>{
    console.log('Error: ', error);
})
// const me = new User({
//     name: 'Henry',
//     age:27

// })
// me.save().then(()=> {
//     console.log(me);
// }).catch((error)=> {
//     console.log('Error !:', error);
// })