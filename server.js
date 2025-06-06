const express = require('express');
const app = express();
const port = 3000;

const { addNote, getAllNotes, getNoteById, deleteNoteById } = require('./notes');

app.use(express.json()); // Parse JSON request bodies

// GET all notes


app.get('/notes', (req, res) => {
    res.json(getAllNotes());
});

// GET a single note by ID
app.get('/notes/:id', (req, res) => {
    const note = getNoteById(req.params.id);
    if (note) res.json(note);
    else res.status(404).json({ error: 'Note not found' });
});

// POST a new note
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newNote = addNote(title, content);
    res.status(201).json(newNote);
});

// DELETE a note by ID
app.delete('/notes/:id', (req, res) => {
    const success = deleteNoteById(req.params.id);
    if (success) res.status(204).send(); // No content
    else res.status(404).json({ error: 'Note not found' });
});
app.get('/', (req, res) => {
    res.send('Welcome to the Notes API!');
});
// Start server
app.listen(port, () => {
    console.log(`Notes API running at http://localhost:${port}`);
});

