// const path = require('path');

// const folderPath = __dirname;
// const folderName = path.basename(folderPath);
// console.log(folderPath);
// console.log(path.isAbsolute(folderPath));
// console.log(folderName); 


// const { spawn } = require('child_process');

// let a = 1
// function myFunction() {
//     setTimeout(() => {
//         a = a + 1
//         console.log('数值:::',a)
//     },10000)
//     callback(a)
// }

// function callback(a){
//     console.log('callback:::',a)
// }

// const childProcess = spawn('node', ['-e', `(${myFunction.toString()})()`]);

// childProcess.on('close', (code) => {
//   console.log(`子进程退出，退出码：${code}`);
// });

const { myFunction } = require('./test')
const { spawnSync } = require('child_process');
// myFunction()
// let a = 1
// function myFunction(b) {
//     setTimeout(() => {
//         b = b + 1
//         console.log('数值:::',b)
//     },3000)
//     // callback(a)
// }

const result = spawnSync('node', ['-e', `(${myFunction.toString()})()`]);

console.log(`子进程输出：${result.stdout}`);
console.error(`子进程错误输出：${result.stderr}`);
console.log(`子进程退出码：${result.status}`);