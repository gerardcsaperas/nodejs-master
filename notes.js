const fs = require('fs');
const chalk = require('chalk');

const warning = chalk.bold.inverse.yellow;
const success = chalk.bold.inverse.green;

const addNote = (title, body) => {
    // Retrieve notes file
    const notes = loadNotes();

    // Check if a note with the same title already exists
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        // Add new note
        notes.push({
            title: title,
            body: body
        });

        // Save updated note
        saveNotes(notes);
    } else {
        console.log(warning('A note with this title already exists...'));
    }
};

const removeNote = (title) => {
    // Retrieve notes file
    const notes = loadNotes();

    // If the notes file is an empty array, tell the user...
    if (notes.length === 0) {
        console.log(warning('The file is already empty.'));
        return null;
    }

    // Check if a note with that title exists
    const noteExists = notes.map((note) => note.title === title).indexOf(1);
    if (noteExists === -1) {
        console.log(warning('A note with that title does not exist.'));
        return null;
    }

    // Filter array to remove unwanted note
    const filteredArray = notes.filter((note) => note.title !== title);

    // Save updated notes
    saveNotes(filteredArray);
};

const listNotes = () => {
    // Retrieve notes file
    const notes = loadNotes();

    // If the notes file is an empty array, tell the user...
    if (notes.length === 0) {
        console.log(warning('The file is empty.'));
        return null;
    }

    // For each note, print its title and an index.
    notes.map((note, i) => console.log(`${i + 1}. ${note.title}`));
};

const readNote = (title) => {
    // Retrieve notes file
    const notes = loadNotes();

    // If the notes file is an empty array, tell the user...
    if (notes.length === 0) {
        console.log(warning('The file is empty...'));
        return null;
    }

    // Check if a note with that title exists
    const noteExists = notes.map((note) => note.title === title).indexOf(true);

    if (noteExists === -1) {
        console.log(warning('A note with that title does not exist.'));
        return null;
    }

    // Find the note we want to read
    const noteToRead = notes.find((note) => note.title === title);

    console.log(chalk.inverse(noteToRead.title));
    console.log(noteToRead.body);
};

const loadNotes = () => {
    try {
        // Read File
        const dataBuffer = fs.readFileSync('notes.json');

        // Parse data to string
        const dataJSON = dataBuffer.toString();

        // Return JSON object version of data
        return JSON.parse(dataJSON);
    } catch (err) {
        // Return an empty array if the file doesn't exist
        return [];
    }
};

const saveNotes = (notes) => {
    // Parse JSON Object to string
    const dataJSON = JSON.stringify(notes);

    // Upload 'notes.json' file
    fs.writeFileSync('notes.json', dataJSON);

    console.log(success('Note saved.'));
};

// Exports previously declared functions in order to use in other files
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};