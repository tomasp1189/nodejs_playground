let Emitter = require('./emitter');

let emtr = new Emitter();

console.log(JSON.stringify(emtr));

emtr.on('greet', () => console.log('Hello'));
emtr.on('greet', () => console.log('Hello again'));

emtr.emit('greet');