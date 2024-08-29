// const buffer = Buffer.from('')
// const buffer1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
// const buffer3 = Buffer.from([0x65,0x72,0x66])
// const a = Buffer.concat([buffer, buffer1, buffer3])
// console.log('测试数据::', buffer + buffer1 + buffer3);
// console.log('数据',a)

// const map1 = new Map();

// // 创建一个包含初始键值对的 Map 对象
// const map2 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3']
// ]);
// console.log(map2)





function init (){
    process.on('uncaughtException',(err) => {
        console.log('异常报错的退出',err)
    })
    
    process.on('beforeExit',(err) => {
        console.log('beforeExit::',err);
    })
    
    process.on('exit', (err) => {
        console.log('异常退出的报错',err)
    })
    // console.log(b)

    const {SCF_RUNTIME_NODE_ENV:env} = process.env
    console.log(env);
}

init()