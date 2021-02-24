require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('603329d776815873ae055589', {age:1}).then((user)=> {
    console.log(user);
    return User.countDocuments({age:1})
}).then((result)=> {
    console.log("this is the count:"+result);
}).catch((e)=> {
    console.log(e);
})