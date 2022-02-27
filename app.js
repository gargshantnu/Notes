console.log("Starting app");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

// console.log(process.argv);

const command = yargs._[0];
const argv = yargs.argv;

if (command == "add") {
    console.log("Adding new note");
    console.log(argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
} else if (command == "list") {
    console.log("Listing note");
    notes.getAllNotes();
} else if (command == "read") {
    console.log("Reading note");
    notes.getNoteByTitle(argv.title);
} else if (command == "remove") {
    console.log("Removing note");
} else {
    console.log("unknown command");
}