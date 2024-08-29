const http = require('http');


process.on('uncaughtException', ()=>{
    console.log('异常报错了');
})
process.on('beforeExit',()=>{
    console.log('退出了');
})

// 创建一个 HTTP 代理
const agent = new http.Agent({
  keepAlive: true,
  maxSockets: 10,
  maxFreeSockets: 5,
});

// 发起多个请求使用同一个代理
const request1 = http.request({
  agent,
  hostname: '0.0.0.0',
  port: 3000,
  path: '/api/endpoint1',
}, (response) => {
  // 处理响应
});

const request2 = http.request({
  agent,
  port: 3000,
  hostname: '0.0.0.0',
  path: '/api/endpoint2',
}, (response) => {
  // 处理响应
});

// 发送请求
request1.end('1212121212');
request2.end('1313131313');