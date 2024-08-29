const mysql = require('mysql2/promise')

async function test(){
  const db = await mysql.createConnection({
        user: "root" ,
        password:"Xuetingliu1",
        host: "172.16.51.228",
        port: "3306"
    }) 
    console.log(db); 
}   

test()
