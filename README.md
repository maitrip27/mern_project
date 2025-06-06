# mern_project
 Notes App — Node.js CLI + RESTful API
A simple, fast, and beginner-friendly Notes App built with Node.js and Express.
Create, read, update, and delete notes directly from the Command Line or through a RESTful API — with all notes stored in a notes.json file using Node's native fs module.

🚀 What You Can Do
✅ Add new notes
✅ View all notes
✅ Get a note by its ID
✅ Delete a note
✅ Update a note (via API)
✅ Store all notes locally in JSON format

📦 Tech Stack
⚙️ Node.js (JavaScript runtime)

🚀 Express.js (for REST API)

📂 File System (fs module for reading/writing JSON)

🧠 No database needed — just clean JSON

🖥️ CLI Usage
bash
Copy
Edit
node cli.js add "Note Title" "Note Content"
node cli.js list
node cli.js view <note_id>
node cli.js delete <note_id>
🌐 API Endpoints
Method	Route	Description
GET	/notes	List all notes
GET	/notes/:id	View a note by ID
POST	/notes	Add a new note
PUT	/notes/:id	Update a note by ID
DELETE	/notes/:id	Delete a note by ID

💡 Why This Project?
Perfect for learning:

File handling in Node.js

RESTful API design with Express

CRUD operations

Full-stack basics without a database

🔗 Easy to run. Easy to extend. Ideal for beginners.
Give it a ⭐ if you like it, and feel free to fork or contribute!

Store notes persistently in notes.json

Built using Express for the API and Node.js for CLI logic

This project is perfect for learning about file handling in Node.js, RESTful routing with Express, and building full CRUD apps with local storage.
