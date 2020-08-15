// Import functions and modules
const notes = require('./notes.js');
const yargs = require('yargs');

// Create	'add' command
// desc.	Adds a note to a file. Create the file
//			if it is not yet created.
//
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

// Create 	'remove' command
// desc. 	Removes a note from a file
//
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

// Create 	'list' command
// desc. 	Lists all notes from a file
//
// Usage example
// $node app.js list
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => notes.listNotes()
});

// Create 'read' command
// desc. 	Reads a note from a file
//
// Usage example:
// $node app.js read --title="Test Note"
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
});

yargs.parse();