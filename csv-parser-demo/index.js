const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = `input-${process.env.TYPE}.csv`;
const outputFilePath = `output-new-${process.env.TYPE}.csv`;
const productName = '云端 IDE';

const resourceIds = new Set();
let count = 0 
fs.createReadStream(inputFilePath)
  .pipe(csv(""))
  .on('data', (row) => {
    count++;
    // if (row['产品名称'] === productName) {
      resourceIds.add(row['资源ID']);
    // }
  })
  .on('end', () => {
    console.log(resourceIds.size);
    const uniqueResourceIds = Array.from(resourceIds);

    // 写入去重后的资源 ID 到输出文件
    const outputStream = fs.createWriteStream(outputFilePath);
    uniqueResourceIds.forEach((resourceId) => {
      outputStream.write(`${resourceId}\n`);
    });
    outputStream.end();
    console.log(count + '条记录写入完成！' + '\n');
    console.log('筛选和去重完成！');
  });


// global._func =  () => {
//     return 'asd'
// }

// const result = global._func()

// function _isPromise(result){
//     const type = result && result.then !== undefined && typeof result.then === 'function'
//     console.log(result.then);
//     return Object.getPrototypeOf(global._func).constructor.name === 'AsyncFunction' || type
//   }

// _isPromise(result)