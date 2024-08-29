const os = require('os');

console.log(os.homedir());
const fse = require('fs-extra');

function test (a,b,c) {
    console.log(a),
    console.log(b);
    console.log(c);
}

const test1 = test.bind(null, 22,33)
console.log(test1);
test1(89,66)
