const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const notes = require('./note.js')
//customize version
yargs.version('1.1.0');

console.log(process.argv);
//create add command
yargs.command ({
    command: 'add',
    describe: 'add new command',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    body: {
        describe: 'my body',
        demandOption: false,
        type: 'string'

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'reading new note',
    builder: {
        title: {
            describe: 'note title ',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse();