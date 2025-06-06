const fs = require('fs');
const path = require('path');

// Resolve the path to notes.json
const filePath = path.join(__dirname, 'notes.json');

// Load all notes from the file
function loadNotes() {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Save all notes to the file
function saveNotes(notes) {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

// Add a new note
function addNote(title, content) {
    const notes = loadNotes();
    const id = Date.now().toString(); // Use current time as unique ID
    const newNote = { id, title, content };
    notes.push(newNote);
    saveNotes(notes);
    return newNote;
}

// Get all notes
function getAllNotes() {
    return loadNotes();
}

// Get a single note by ID
function getNoteById(id) {
    const notes = loadNotes();
    return notes.find(note => note.id === id);
}

// Delete a note by ID
function deleteNoteById(id) {
    let notes = loadNotes();
    const originalLength = notes.length;
    notes = notes.filter(note => note.id !== id); // Remove note
    saveNotes(notes);
    return notes.length !== originalLength; // True if something was deleted
}

// Export functions so other files can use them
module.exports = {
    addNote,
    getAllNotes,
    getNoteById,
    deleteNoteById
};
