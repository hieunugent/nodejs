const notes = require('./notes.js')
const yargs = require('yargs')
const chark = require('chalk');
const { argv } = require('process');
const msg = notes.getNotes()

console.log('====================================');
console.log(msg);
console.log('====================================');

// console.log(chark.green.inverse.bold('Success!'));s
// console.log(chark.red.inverse.bold('error!'));


const command = console.log(process.argv[2])



yargs.command({
    command:"add",
    describe: "add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command:"remove",
    describe: "remove a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
       notes.deleteNote(argv.title)
    }
})
yargs.command({
    command:"list",
    describe: "list a new note",
    handler: function () {
        console.log("listing a new note");
    }
})

// console.log(yargs.argv);
yargs.parse()