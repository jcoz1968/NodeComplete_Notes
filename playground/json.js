// var obj = {
//     name: 'Jeffery'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Jeffery", "Age": 49}';
// var jsonObject = JSON.parse(personString);
// console.log(typeof jsonObject);
// console.log(jsonObject);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var readNote = JSON.parse(noteString);
console.log(readNote.title);