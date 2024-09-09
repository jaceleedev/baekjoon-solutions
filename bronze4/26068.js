// 치킨댄스를 추는 곰곰이를 본 임스 2 (26068)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let count = 0;

for (let i = 1; i <= n; ++i) {
  const dDay = Number(input[i].split('-')[1]);

  if (dDay <= 90) {
    ++count;
  }
}

console.log(count);
