// 오늘의 날짜는? (16170)
const now = new Date();
const year = now.getUTCFullYear();
const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
const day = now.getUTCDate().toString().padStart(2, '0');

console.log(year);
console.log(month);
console.log(day);
