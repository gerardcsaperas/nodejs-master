// Imports functions and modules
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const fs = require('fs');

// Add commands to 'add', 'remove', 'read', and 'list'
// your text notes

// Create 'add' command for yargs
// Usage example:
// $node app.js add --title="Test Note" --body="Test Note's Text"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const { title, body } = argv;
        notes.addNote(title, body);
    }
});

// Create 'remove' command
// Usage example:
// $node app.js remove --title="Test Note"
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log('Listing notes...')
});

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading a note...')
});

yargs.parse();