console.log("Starting app");

const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");

// console.log(process.argv);

const command = process.argv[2];

if (command == "add") {
    console.log("Adding new note");
} else if (command == "list") {
    console.log("Listing note");
} else if (command == "read") {
    console.log("Reading note");
} else if (command == "remove") {
    console.log("Removing note");
} else {
    console.log("unknown command");
}