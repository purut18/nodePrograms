const Joi = require('joi');
const express = require('express');
// requiring this gives a function
// this function on being called returns an object
// that by convention we call 'app'
const app = express();

// this line is to use json in post body
app.use(express.json());

const courses = [
    { id: 1, name: 'Maths' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'CHemistry' } 
];
// this object has methods like:
// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req, res) => {
    res.send('Hello World Puru!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// api/courses/1
// this is a route parameter

app.get('/api/courses/:id', (req, res) => {
    // parameters sent in link
    //res.send(req.params);
    // query sent after question mark ?sortBy=name
    // res.send(req.query);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  return res.status(404).send('The course with the given ID wasn\'t found'); // send 404
    else res.send(course);
});

app.post('/api/courses', (req,res) => {

    const { error } = validateCourse(req.body);
    
    if (error) {
        // send 400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
                name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // look up for the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID wasn\'t found');

    // validate
    const { error } = validateCourse(req.body);
      
    if (error) {
        // send 400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }

    // update the course
    course.name = req.body.name;

    // return the updated course
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // 404 if does not exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID wasn\'t found');

    // delete it
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // return the course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}

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