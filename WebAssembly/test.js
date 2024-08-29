const fs = require('fs');

// 读取 WebAssembly 二进制文件
const buffer = fs.readFileSync('test.wasm');

// 编译 WebAssembly 模块
const moduleObj = new WebAssembly.Module(buffer);

// 实例化 WebAssembly 模块
const instance = new WebAssembly.Instance(moduleObj);

// 调用 WebAssembly 函数
console.time()
const result = instance.exports.fib(40);
console.timeEnd();
console.log(result); // 输出 3

function fib(n){
    if(n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}

console.time()
fib(40)
console.timeEnd();