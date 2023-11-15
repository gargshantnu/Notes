console.log("Starting app");
const fs = require("fs");

const addNote = (title, body) => {
    console.log("Adding note", title, body);
    let notes = [];
    let note = { title, body };
    notes.push(note);
    fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const getAllNotes = () => {
    console.log("Getting all note");
};

const getNoteByTitle = (title) => {
    console.log("Getting single note by title: ", title);
};

const removeNoteByTitle = (title) => {
    console.log("Removing note by title: ", title);
};

module.exports = {
    addNote,
    getAllNotes,
    getNoteByTitle,
    removeNoteByTitle,
};
