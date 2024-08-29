process.on('uncaughtException', (err) => {
    console.log(err);
})

process.on('beforeExit', (err) => {
    console.log(err);
})