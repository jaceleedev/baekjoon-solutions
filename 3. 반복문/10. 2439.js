const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

let answer = '';
for (let i = 1; i <= n; ++i) {
  const space = ' '.repeat(n - i);
  const star = '*'.repeat(i);

  answer += `${space}${star}\n`;
}

console.log(answer);
