const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);
// fs.writeFileSync('1-json.json', bookJSON)

// const databuffer = fs.readFileSync('1-json.json')
// const dataJSON = databuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(databuffer)
// console.log(data.title);
const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name);
data.name= "Henry"
data.age = 34
const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)