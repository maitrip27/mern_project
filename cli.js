const { addNote, getAllNotes, getNoteById, deleteNoteById } = require('./notes');

// Extract command and arguments from terminal input
const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        const [title, content] = args;
        if (!title || !content) {
            console.log('Usage: node cli.js add <title> <content>');
        } else {
            const note = addNote(title, content);
            console.log('Note added:', note);
        }
        break;

    case 'list':
        const notes = getAllNotes();
        console.log('All Notes:');
        notes.forEach(note => {
            console.log(`- ${note.id}: ${note.title}`);
        });
        break;

    case 'view':
        const idToView = args[0];
        const note = getNoteById(idToView);
        if (note) {
            console.log('Note found:');
            console.log(note);
        } else {
            console.log('Note not found.');
        }
        break;

    case 'delete':
        const idToDelete = args[0];
        const success = deleteNoteById(idToDelete);
        console.log(success ? 'Note deleted' : 'Note not found');
        break;

    default:
        console.log(`
Usage:
  node cli.js add <title> <content>    Add a new note
  node cli.js list                     List all notes
  node cli.js view <id>                View a note by ID
  node cli.js delete <id>              Delete a note by ID
        `);
}
