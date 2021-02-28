const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName='task-manager-api'
//CRUD

MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology: true}, (error, client)=> {
    if (error){
        return console.log('unable to connect to server');
    }
    const db = client.db(databaseName)





    
    // db.collection('users').updateOne({_id: new mongodb.ObjectID("602f002972dc4716fef5b09c")}, {
    //     $inc:{
    //         age:30
    //     }
    // }).then((result)=> {
    //     console.log("SUCCESS");
    // }).catch((error)=> {
    //     console.log("ERROR");
    // })

    // db.collection('users').deleteOne({name:'Hieu'}
    // ).then((result)=> {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // })
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

    // db.collection('users').findOne({name:'Hieu', age: 20}, (error, user)=>{
    //     if(error){
    //         return console.log('can not fetch user in data');
    //     }else if (user === null){
    //         return console.log('user info not found');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({age:27}).toArray((error, users)=> {
    //     console.log(users);
    // })
    // db.collection('tasks').findOne({_id: new mongodb.ObjectID("602f0706c653c618bd17d3ae")}, (error, task)=> {
    //     if(error){
    //         return console.log('Can fetch the task');
    //     }
    //     console.log(task);
    // })
    // db.collection('tasks').find({completed: true}).toArray((error, tasks)=> {
    //     console.log(tasks);
    // })

})
