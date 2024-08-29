

const fastify = require('fastify')({
    http2: false, // 设置为 false，以使用 HTTP/1 协议
    maxParamLength: 6 * 1024 * 1024, // 设置最大请求头为 6MB
  });
  
  fastify.get('/', (request, reply) => {
    reply.send('helloworld');
  });
  
  // 监听 3000 端口
  fastify.listen({port: 3000}, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Server is running on port 3000');
  });

 //服务停止
  fastify.close().then(() => {
    console.log('successfully closed!')
  }, (err) => {
    console.log('an error happened', err)
  })