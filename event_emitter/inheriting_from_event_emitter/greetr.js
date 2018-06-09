const EventEmitter = require('events');
const util = require('util');

function Greetr() {
    EventEmitter.call(this);
	this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(`${this.greeting}: ${data}`);
	this.emit('greet', data);
};

module.exports = Greetr;
