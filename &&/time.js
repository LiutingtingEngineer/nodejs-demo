const date1 = new Date('2024-04-19 01:02:17');
const date2 = new Date('2024-04-19 20:15:06');

// 计算时间间隔（以毫秒为单位）
const timeDiff = Math.abs(date1 - date2);

// 将时间间隔转换为小时、分钟和秒
const hours = Math.floor(timeDiff / (1000 * 60 * 60));
const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

console.log(hours + "小时 " + minutes + "分钟 " + seconds + "秒");