let uncaughtExceptionCallback = (err) => {
    console.log(2222);
    let err_msg = err instanceof Error ? err.stack : String(err)
    console.log(55555,err_msg)
  }

  process.on('uncaughtException',uncaughtExceptionCallback)
  process.on('exit',(code) => {
    console.log(code);
  })
  function test1(){
    // setTimeout(() => {
    //     console.log(ccc);
    // },100)
    process.exit(7)
    console.log('9999');

  }
  function test(){
    process.exit(7)
    // try {
    //    console.log(b);
    // } catch (error) {
    //     test1(1)
    // }
}
  test()