const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 设置最大请求头大小为 6MB
app.use(bodyParser({ jsonLimit: '6mb' }));

// 监听 3000 端口
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 处理任何请求并返回 "helloworld"
app.use(async (ctx) => {
    const context = decodeURIComponent(ctx.request.headers['context'])
    console.log('得到的请求头的内容',JSON.parse(context))
    ctx.status = 200
    ctx.body = 'helloworld';
    server.close()
});