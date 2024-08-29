const fs = require('fs');

const files = fs.readdirSync('./src');

console.log('读取路径中的文件',files);

console.log('是否存在路径：：',fs.existsSync('../mysql'));
console.log(fs.existsSync('./src'));

const crypto = require('crypto');
const hash = crypto.createHash('sha256');
console.log(hash);

const input = fs.createReadStream('./test.js');
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  console.log( 'data::::',data);
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${'./test.js'}`);
  }
});


const AdmZip = require('adm-zip');
const path = require('path');

// 创建一个 ZIP 文件
const zip = new AdmZip();
zip.addFile('hello.txt', Buffer.from('hello'));
zip.writeZip('example.zip');

// 解压一个 ZIP 文件
const zip1 = new AdmZip('example.zip');
// fs.rmdirSync('src',{ recursive: true })
zip1.extractAllTo('src', true);
const entries = zip1.getEntries()
console.log('长度::',entries.length);
entries.forEach(entry => {
    if (entry.attr) {
      console.log(entry.attr)
      const mode = entry.attr >>> 16
      console.log(mode)
    //   const filePath = path.resolve('src')
    //   if (mode && fs.existsSync(filePath)) {
    //     fs.chmodSync(filePath, mode)
    //   }
    }
  })

