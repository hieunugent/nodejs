const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
})
const User = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        trim:true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "Password"')
            }
        }

    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be positive number')
            }
        }
    }
})
const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true,
    },
    completed:{
        type: Boolean,
        default: false,
    }
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