
// const promise1 = async function () {
//        return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello');
//         }, 1000);
//     }); 
// }


// const promise3 = async function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('World');
//         }, 1000);
//     })
// }

// const promise4 = async function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('11111111');
//         }, 1000);
//     })
// }

// const promise2 = 
// async () => {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('wwww');
//         }, 1000);
//     });
// }

// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Promise Rejection:', reason,"and",promise);
//     // 可以在这里进行错误处理或记录日志
// });

// process.on('uncaughtException', (err) => {
//     console.log('??????????',err);
// })

// const demo = async () => {
//     await promise1()
//     await promise2()
//     await promise3()
//     await promise4()
//     console.log('done');
//     return 'done';
// };

// demo().then(() => {
//     console.log('Promise resolved');
//   },(err) => {
//     console.log('Promise rejected:', err);
//   })
// // .catch((err) => {
// //     console.log('大::',err);
// // })


const abc = async (event, context) => {
    return 'Keep Hot'
}

const result = abc()
console.log( result instanceof Promise ) ;