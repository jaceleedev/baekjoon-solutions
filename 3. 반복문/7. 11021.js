const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const t = Number(input[0]);

let answer = '';
for (let i = 1; i < t + 1; ++i) {
  const [a, b] = input[i].split(' ').map(Number);
  answer += `Case #${i}: ${a + b}\n`;
}

console.log(answer);
