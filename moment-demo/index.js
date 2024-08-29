 
const moment = require('moment')

 
const getDuration = (time, format, unit) => {
    // const nowStr = moment().locale('zh-cn').format(format)
    const now = moment("2023-02-28 21:31:11")
    const effectiveTime = moment(time).format(format)
    console.log(effectiveTime);
    const num = now.diff(effectiveTime, unit)
    return num
  }

console.log(moment().format());

console.log(getDuration("2023-01-28 21:31:10", 'YYYY-MM-DD HH:mm:ss','months'))