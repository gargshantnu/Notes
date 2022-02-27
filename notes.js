console.log("Starting app");



const addNote = (title, body) => {
    console.log("Adding note", title, body);
}

const getAllNotes = () => {
    console.log("Getting all note");
}

const getNoteByTitle = (title) => {
    console.log("Getting single note by title: ", title);
}

const removeNoteByTitle = (title) => {
    console.log("Removing note by title: ", title);
}

module.exports = {
    addNote,
    getAllNotes,
    getNoteByTitle,
    removeNoteByTitle,
}