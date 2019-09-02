const express = require('express');
// requiring this gives a function
// this function on being called returns an object
// that by convention we call 'app'
const app = express();

// this object has methods like:
// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req, res) => {
    res.send('Hello World Puru!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5]);
});

// api/courses/1
// this is a route parameter

app.get('/api/courses/:id/:date', (req, res) => {
    // parameters sent in link
    res.send(req.params);
    // query sent after question mark ?sortBy=name
    // res.send(req.query);
});


// fist parameter in listen is the port
// second is the function
// this function says what to do when it starts listening
// app.listen(3000, () => {
//     console.log('Started Listening...');
// });

// on real server we don't know the port
// 3000 may not be available
// so we use environment variables

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started Listening ${port} ...`);
});