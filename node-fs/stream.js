const fs = require('fs');
const { Transform,pipeline } = require('stream');

// 创建一个可读流
const readStream = fs.createReadStream('input.txt');
console.log(readStream);

// 创建一个可写流
const writeStream = fs.createWriteStream('output.txt');

// 创建一个转换流
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // 将数据转换为大写
    const upperCaseChunk = chunk.toString().toUpperCase();
    // 调用回调函数，将转换后的数据传递给下一个流
    callback(null, upperCaseChunk);
  }
});

// 将可读流连接到转换流，再连接到可写流
readStream.pipe(upperCaseTransform).pipe(writeStream);

// 使用 pipeline 方法将可读流、转换流和可写流连接起来
pipeline(readStream, upperCaseTransform, writeStream, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });