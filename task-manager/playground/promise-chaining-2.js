require('../src/db/mongoose')
const Task = require('../src/models/task')

const id= "6030b01c761ac3456c9a2600"
Task.findByIdAndDelete(id).then((task)=> 
{
    console.log(task);
    return Task.countDocuments({completed:true})
}).then((result)=> {
    console.log(result);
}).catch((e)=> {
    console.log(e);
})