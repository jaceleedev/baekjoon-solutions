// 金平糖 (Konpeito) (22015)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

const max = Math.max(a, b, c);

const answer = max - a + max - b + max - c;

console.log(answer);
