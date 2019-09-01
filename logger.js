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

