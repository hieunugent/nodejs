const getNotes = require('./notes.js')
const yargs = require('yargs')
const chark = require('chalk')
const msg = getNotes()

console.log('====================================');
console.log(msg);
console.log('====================================');

console.log(chark.green.inverse.bold('Success!'));
console.log(chark.red.inverse.bold('error!'));


const command = console.log(process.argv[2])



yargs.command({
    command:"add",
    describe: "add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        console.log("Title: "+ argv.title);
    }
})
yargs.command({
    command:"remove",
    describe: "remove a new note",
    handler: function () {
        console.log("remove a new note");
    }
})
yargs.command({
    command:"list",
    describe: "list a new note",
    handler: function () {
        console.log("listing a new note");
    }
})

console.log(yargs.argv);