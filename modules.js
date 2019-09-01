// var sayHellow = function() {

// };

// window.sayHello();

// 2 files with same function name overwrites each other
// therefore don't create these in global scope
// instead create modukes
// functions don't overwrite 
// all modules are different

const logger = require('./logger');

// setting logger to contant helps so that
// we dont accidently set logger to another value
// this helps avoid errors

logger.log('a random message');
