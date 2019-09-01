// event module helps us bring event driven
// programming to node js
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// set what happens when event is fired
eventEmitter.on('tutorial', (num1, num2) => {
   console.log(num1 + num2);
});

// use this to fire an event
eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let puru = new Person('Puru');

puru.on('name', () => {
    console.log(`My name is ${puru.name}`);
})

puru.emit('name');