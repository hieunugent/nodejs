const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName='task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology: true}, (error, client)=> {
    if (error){
        return console.log('unable to connect to server');
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name:'Hieu',
    //     age:30
    // }, (error, result)=> {
    //     if(error){
    //         return console.log('unable to insert the user')
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany(
    //     [
    //         {
    //             description:'clean the house',
    //             completed:true
    //         },
    //         {
    //             description:'Renew Inspection',
    //             completed:false
    //         },
    //         {   
    //             description:'Make rice',
    //             completed:true

    //         }
    //     ], (error, result)=> {
    //         if (error){
    //             return console.log('Unable to insert tasks !');
    //         }
    //         console.log(result.ops);
    //     }
    // )
    // db.collection('users').insertMany([
    //     {
    //         name: 'Rynnie',
    //         age: 27
    //     },
    //     {
    //         name:'Tom',
    //         age:20

    //     }
    // ], (error, results)=> {
    //     if(error){
    //         return console.log('Unable to insert Users !');
    //     }
    //     console.log(results.ops);
    // })
})
