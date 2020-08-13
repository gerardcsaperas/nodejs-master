// Require File System Module
const fs = require('fs');

// If the text file doesn't exist, it will be created. If it already exists, it will be overwritten.
fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text
fs.appendFileSync('notes.txt', '\n\nChallenge accepted...(actually, completed)');