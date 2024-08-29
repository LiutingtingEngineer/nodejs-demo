const http = require('http');
const hostname = '0.0.0.0';
const port = 38003;
const server = http.createServer((req, res) => {
  console.log(req.method,req.url);
  let eventData = '';
  //获取post请求的body数据
  req.on('data', chunk => {
    //二进制转为字符串
    eventData += chunk.toString();
  })
  req.on('end',async () => {
      console.log('eventData:',eventData);
      res.writeHead(200);
      res.end('Hello World!','utf-8');
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});