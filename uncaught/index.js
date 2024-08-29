process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // 在这里进行异常处理或清理工作
    // 请注意，这个回调函数只会在异常发生时调用一次，并且在调用后 Node.js 进程将会退出
  });
  
  // 未被捕获的同步异常
  function syncException() {
    try {
        a = b
    } catch (error) {
        // console.log(error);
        throw new Error('Sync Exception');
    }
    
  }
  
  syncException();
  
  // 未被捕获的异步异常
  function asyncException() {
    setTimeout(() => {
      throw new Error('Async Exception');
    }, 1000);
  }
  
//   asyncException();
  
//   // 未处理的 Promise 拒绝
  function unhandledPromiseRejection() {
    Promise.reject(new Error('Unhandled Promise Rejection'));
  }
  
//   unhandledPromiseRejection();
