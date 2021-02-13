const chalk = require('chalk')
const fs = require('fs')
const getNotes = ()=> {
    return 'Your note...'
}
const addNote = (title, body)=> {
        const notes = loadNotes()
        const duplicateNotes = notes.find((note)=>note.title ===title)
        debugger
        if (duplicateNotes){
            notes.push({
                title:title,
                body:body
            })
            saveNotes(notes)
            console.log(chalk.green.inverse("Add new note"));
        }else{
            console.log(chalk.red.inverse("Note title taken"));
        }       
}
const removeNote = (title)=>{
        const notes = loadNotes()
        const findNotes = notes.filter(function(note){
            return note.title != title
        })
        if (notes.length === findNotes.length){
            console.log(chalk.red.inverse("Nothing was remove"))
        } 
        else{
            saveNotes(findNotes)
            console.log(chalk.green.inverse(title+  " was remove"))
        }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const listNotes= () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((note)=> {
        console.log(note.title)
    })
}
const loadNotes = ()=>{
        try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
        }catch (e){
            return []        
        }
    }
const readNote=(title) => {      
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    if (note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote, 
    removeNote: removeNote,
    listNodes: listNotes,
    readNote:readNote,
} 