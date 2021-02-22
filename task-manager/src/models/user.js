const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User