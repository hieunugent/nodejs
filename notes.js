const chalk = require('chalk')
const fs = require('fs')
const getNotes = ()=> {
    return 'Your note...'
}
const addNote = (title, body)=> {
        const notes = loadNotes()
        const duplicateNotes = notes.filter((note)=>note.title ===title)
        if (duplicateNotes.length === 0){
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
const loadNotes = function(){
        try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
        }catch (e){
            return []        
        }
    }
module.exports = {
    getNotes: getNotes,
    addNote: addNote, 
    removeNote: removeNote,
} 