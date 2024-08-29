
let b = 12

process.on('beforeExit',() =>{
    // 起服务
})

// 入口函数
function myFunction() {
    setTimeout(() => {
        b = b + 1
        console.log('数值:::',b)
    },5000)
    test(b)
}

function test(a) {
    console.log(a)
}

module.exports = {
    myFunction
}

http.createServer(function(){
    
})