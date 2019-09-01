// this file will be used to log messages
// we will send a http request to a end point wesbtie

var url = 'http://mylogger.io/log';
function log(message) {
    // send an HTTP request
    // for simplicity right now, not sending actual HTTP req
    console.log(message);
}

// exporting function and url variable

module.exports.log = log;
// module.exports.endPoint = url;
// commented it out because it is an implementation  
// detail that other modules don't need

// we can also export only one function instead
// of a object
// eg. module.exports = log;
// then use it as a function directly

// output file path
console.log(__filename);
// output folder path
console.log(__dirname);