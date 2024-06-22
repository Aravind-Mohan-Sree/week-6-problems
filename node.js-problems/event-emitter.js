const EventEmitter = require('node:events');

const eventemitter = new EventEmitter();

eventemitter.on('bakePizza', (topping) => {
  console.log(`Pizza is baked with ${topping} as topping.`);
});

eventemitter.emit('bakePizza', 'Mushroom');