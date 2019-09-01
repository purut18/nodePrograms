const path = require ('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// this module is used to work with paths
// the above code outputs this:
// myFirstProgram.js
// { root: '/',
//   dir:
//    '/home/puru/Documents/git_workspace/nodePrograms/nodePrograms',
//   base: 'myFirstProgram.js',
//   ext: '.js',
//   name: 'myFirstProgram' }

// giving us information about the file path etc.