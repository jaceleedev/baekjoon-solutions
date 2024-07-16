// 파티가 끝나고 난 뒤 (2845)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [l, p] = input[0].split(' ').map(Number);
const accurateCount = l * p;
const participants = input[1].split(' ').map(Number);
const diff = participants.map((participant) => participant - accurateCount);

console.log(diff.join(' '));
