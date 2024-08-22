// アイスクリーム (Ice Cream) (24087)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const s = Number(input[0]);
const a = Number(input[1]);
const b = Number(input[2]);

console.log(250 + Math.max(0, Math.ceil((s - a) / b)) * 100);
