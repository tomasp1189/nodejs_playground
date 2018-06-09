const Emitter = require('events');
const eventConfig = require('./config').events;


let emtr = new Emitter();

console.log(JSON.stringify(emtr));

emtr.on(eventConfig.GREET, () => console.log('Hello'));
emtr.on(eventConfig.GREET, () => console.log('Hello again'));

emtr.emit(eventConfig.GREET);