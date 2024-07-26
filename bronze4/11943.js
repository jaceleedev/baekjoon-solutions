// 파일 옮기기 (11943)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const count1 = a + d;
const count2 = b + c;

console.log(count1 > count2 ? count2 : count1);
