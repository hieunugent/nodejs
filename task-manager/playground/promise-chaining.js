require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('603329d776815873ae055589', {age:1}).then((user)=> {
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result)=> {
//     console.log("this is the count:"+result);
// }).catch((e)=> {
//     console.log(e);
// })
const updateAgeAndCount = async(id, age)=> {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6030925a15c7f440ecfacbfc', 2).then((count)=> {
    console.log(count);
}).catch((e)=> {
    console.log(e);
})
