console.log('Starting app.js');

const fs = require('fs');
const os = require ('os');
const _ = require('lodash');

const notes = require('./notes.js');

//var res = notes.addNote();
//var res = notes.add(9, -2);
//console.log(res);

console.log(_.isString(true));
console.log(_.isString('coz'));

var filteredArray = _.uniq(['coz']);
console.log(filteredArray);


// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
//     if (err) {
//         console.log('Unable to write file');
//     }
// });

