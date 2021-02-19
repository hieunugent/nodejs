const doworkPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        //resolve([1,3,5])
        reject('Thing went wrong!!!')
    }, 2000)
})
doworkPromise.then((result)=> {
    console.log('Success!', result);
}).catch((error)=> {
    console.log('Error! ', error);
})