const getNotes = require('./notes.js')
const chark = require('chalk')
const msg = getNotes()

console.log('====================================');
console.log(msg);
console.log('====================================');

console.log(chark.green.bold('Success!'));