const http = require('http');

const startTime = Date.now()
    let proxy = http.request({
    method: 'POST',
    port: 38003,
    host: '127.0.0.1',
    protocol: 'http:',
    path:'/runtime-call-back',
    // headers: {'RetCode':2,'Connection':'close'}
    }, (res) => {
        let responseData =  ''
        res.on('data', (chunk) => {
            responseData += chunk; // 拼接数据块
          });
        
          res.on('end', () => {
            console.log(11111111, responseData, Date.now());
            // 在这里对 responseData 进行进一步处理
          });
    })
    proxy.write('retMsg'  || '')
    proxy.end('','utf-8',() => {
        console.log(222222,);
    })
    //监听请求连接异常，关闭连接
    proxy.on('error', (error) => {
    proxy.end()
    })
    proxy.on('close', () => {
        console.log(33333, Date.now());
    })
    proxy.on('socket', (socket) => {
    socket.on('connect', () => {
        console.log(4444444);
    })
    })