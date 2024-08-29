// process.on('message', (msg) => {
//     console.log('message from parent:', msg);
// });
// let conter = 0;
// setInterval(() => {
//     process.send({counter: counter++});
// }, 1000);
const util = require('node:util');
const debuglog = util.debuglog('foo');
debuglog('hello from foo [%d]', 123)
