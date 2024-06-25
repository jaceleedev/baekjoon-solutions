// 오늘 날짜 (10699)
const now = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);

const year = now.getUTCFullYear();
const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
const day = now.getUTCDate().toString().padStart(2, '0');

console.log(`${year}-${month}-${day}`);
