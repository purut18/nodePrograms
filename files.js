const fs = require('fs');

// this will return all files and folder
// var files = fs.readdirSync('./');
// use async functions

fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('result', files);
});

// console.log(files);