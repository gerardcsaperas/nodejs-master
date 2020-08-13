// Import dependencies
const validatr = require('validator');

// Imports function from another file
const getNotes = require('./notes.js');

console.log(getNotes());

console.log(validator.isEmail('gerarrard.com'));