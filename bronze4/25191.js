// 치킨댄스를 추는 곰곰이를 본 임스 (25191)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const [a, b] = input[1].split(' ').map(Number);

const coke = Math.floor(a / 2);
const beer = b;
const chicken = n;

console.log(Math.min(chicken, coke + beer));
