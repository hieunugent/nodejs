const fs = require('fs')
const getNotes = function () {
    return 'Your note...'
}
const addNote = function(title, body){
        const notes = loadNotes()
        const duplicateNotes = notes.filter(function (note){
            return note.title ===title
        })
        if (duplicateNotes.length === 0){
            notes.push({
                title:title,
                body:body
            })
            saveNotes(notes)
            console.log("Add new note");
        }else{
            console.log("Note title taken");
        }       
}
const deleteNote = function(title){
        const notes = loadNotes()
        const findNotes = notes.filter(function(note){
            return note.title != title
        })
        if (notes.length === findNotes.length){
            console.log("Nothing was remove")
        } 
        else{
            saveNotes(findNotes)
            console.log(title+  " was remove")
        }
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function(){
        try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
        }catch (e){
            return []        }
    }
module.exports = {
    getNotes: getNotes,
    addNote: addNote, 
    deleteNote: deleteNote
} 