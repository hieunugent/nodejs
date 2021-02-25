require('../src/db/mongoose')
const Task = require('../src/models/task')

// const id= "6030b01c761ac3456c9a2600"
// Task.findByIdAndDelete(id).then((task)=> 
// {
//     console.log(task);
//     return Task.countDocuments({completed:false})
// }).then((result)=> {
//     console.log(result);
// }).catch((e)=> {
//     console.log(e);
// })
const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6030b0ca149fb345ad9ca318').then((count)=> {
    console.log(count);
}).catch((e)=>{
    console.log(e);
})