console.log('Starting app.js');

const fs = require('fs');
const os = require ('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs', argv);

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note already exists!')
  }
  } else if(command === 'list') {
      notes.getAll();
  } else if(command === 'read') {
      var note = notes.getNote(argv.title);  
      if(note) {
        notes.logNote(note);
      } else {
        console.log('note not found');
      }
  } else if(command === 'remove') {
      var noteRemoved = notes.removeNote(argv.title);
      var msg = noteRemoved ? 'successfully removed message' : 'note not found';
      console.log(msg);    
  } else {
      console.log('command not recognized');
}