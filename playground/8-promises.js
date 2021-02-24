// const doworkPromise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         //resolve([1,3,5])
//         reject('Thing went wrong!!!')
//     }, 2000)
// })
// doworkPromise.then((result)=> {
//     console.log('Success!', result);
// }).catch((error)=> {
//     console.log('Error! ', error);
// })


const add =(a, b)=> {
    return  new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(a+b)
        }, 2000)
    })
}

add(1,2).then((sum)=> {
    console.log(sum);
    return add(sum, 7)
}).then((sum1)=> {
    console.log(sum1);
    return add(sum1, 8)
}).then((sum2)=> {
    console.log(sum2);
}).catch((e)=> {
    console.log(e);
})