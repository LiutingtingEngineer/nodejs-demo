const addon = require('./build/Release/myaddon.node');
console.time();
console.log(addon.fib(45));
console.timeEnd();