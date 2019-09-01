const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory)
// instead use template string
// ES6 / ES2015 : ECMAScript 6
// use backtick `` to output this

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`)