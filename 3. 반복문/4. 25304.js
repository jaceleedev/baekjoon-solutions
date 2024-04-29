const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const x = Number(input[0]);
const n = Number(input[1]);

let total = 0;
for (let i = 2; i < n + 2; ++i) {
  const [a, b] = input[i].split(' ').map(Number);
  total += a * b;
}

console.log(total === x ? 'Yes' : 'No');
