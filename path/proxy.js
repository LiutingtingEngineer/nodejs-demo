function test() {
    setTimeout(() => {
      console.log('55555555');
    }, 2000);
  }
  
  // 创建一个代理函数
  const testProxy = new Proxy(test, {
    apply: async function(target, thisArg, argumentsList) {
      const result = await Reflect.apply(target, thisArg, argumentsList); // 调用原始的test函数
      console.log('test函数调用完成');
      return result;
    }
  });
  
  // 调用代理函数
  console.log(testProxy())
