// Imports functions and modules
const chalk = require('chalk');
const getNotes = require('./notes.js');
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
    handler: (argv) =>
        fs.writeFile(`${argv.title}.txt`, argv.body, (err) => {
            if (err) throw err;
            console.log('File successfully written.');
        })
});

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => console.log('Removing a note...')
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