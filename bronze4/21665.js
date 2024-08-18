// Миша и негатив (21665)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const original = [];
const negative = [];
let answer = 0;

for (let i = 1; i <= n; ++i) {
  original.push(input[i]);
}

for (let i = n + 2; i <= 2 * n + 1; ++i) {
  negative.push(input[i]);
}

for (let i = 0; i < n; ++i) {
  const cho = original[i];
  const chn = negative[i];

  for (let j = 0; j < m; ++j) {
    if (
      (cho[j] === 'W' && chn[j] === 'W') ||
      (cho[j] === 'B' && chn[j] === 'B')
    ) {
      ++answer;
    }
  }
}

console.log(answer);
