const client = require('./runtime.node')
console.log('12');
client.log('gonna do gc')

// 冒泡算法
function test(){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

test()