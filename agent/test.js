const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200,'Content-Type', 'text/plain');
  res.end()
//   // 写入响应数据
//   res.write('Hello, World!');

//   // 监听错误事件
//   res.on('error', (err) => {
//     console.error('发生错误:', err);
//   });

//   // 模拟错误发生
//   const error = new Error('Something went wrong');
//   res.end(error.message)
});

server.listen(3000, () => {
  console.log('服务器已启动');
});

setTimeout(() => {
    const http = require('http');

    const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/', // 使用一个无效的路径
    method: 'GET'
    };

    const req = http.request(options, (res) => {
        console.log(res.statusCode);
        console.log(res.headers);
        res.on('close', () => {
            console.log('close调用了');
        })
        res.on('data', (data) => {
            console.log('接收数据');
            console.log(data.toString());
        });
        res.on('end', () => {
            console.log('结束了');
        })
    });

    req.on('error', (err) => {
        console.error('发生错误:', err);
    });
    req.write('Hello, World!');
    req.end();
 },1000)