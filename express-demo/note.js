const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return 'your notes..'
},

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if (duplicateNotes.length === 0) {
        notes.push ({
            title: 'title',
            body: 'body'
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added..'))
    } else {
        console.log(chalk.bgRed('Note title taken..'))
}
    
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))

    }
    
}
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('1-json-json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}