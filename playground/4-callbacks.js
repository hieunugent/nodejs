const doWorkCallback=(callback)=> {
    setTimeout(()=> {
        callback(undefined, [1,2,4])}, 2000)
}

doWorkCallback((error, result)=> {
    if(error){
       return  console.log(error);
    }
    console.log(result);
})













// const geocode = (address, callback)=> {
//     setTimeout(()=>{
//         const data = {
//             latitude:0,
//             longitude:0
//         }
//         callback(data)

//     }, 2000)
// }

// geocode('Philade', (data)=> {
//     console.log(data);
// })
// const add = (a, b , callback)=> {
//     setTimeout(()=> {
//         callback (a+b)
//     }, 2000)
// }


// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })