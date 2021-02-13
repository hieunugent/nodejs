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
    handler(argv) {
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
    handler(argv) {
       notes.removeNote(argv.title)
    }
})
yargs.command({
    command:"list",
    describe: "list a new note",
    handler() {
        notes.listNodes()
    }
})
yargs.command({
    command: "read",
    describe:"Read a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        console.log('Reading note');
        notes.readNote(argv.title)
    }
})
// console.log(yargs.argv);
yargs.parse()