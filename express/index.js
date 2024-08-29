const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

// 设置最大请求头大小为 6MB
app.use(bodyParser.json({ limit: '6mb' }));

function writeRuntimeFile(filePath,msg,isOverWrite = true){
  try {
    if(isOverWrite){
      fs.writeFileSync(filePath,msg.toString(),{ mode: '0711' })
    }else{
      fs.appendFileSync(filePath,msg.toString(),{ mode: '0711' })
    }
  } catch (error) {
    throw new Error(error)
  }
}

// 监听 3000 端口
try {
  const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })
} catch (err) {
  console.log(err.stack);
  let err_msg = err instanceof Error ? err.stack : String(err)
  writeRuntimeFile('log',err_msg)
  console.log('报错啦', err);
}

process.on('uncaughtException',(err) => {
  console.log('异常捕获', err.stack.toString());
})

// 处理任何请求并返回 "helloworld"
app.all(/\/.*/, (req, res) => {
  const context = decodeURIComponent(req.headers['context'])
  console.log('得到的请求头的内容',JSON.parse(context))
  res.status(200)
  res.send('helloworld');
  // server.close() // 服务的关闭指令
});

