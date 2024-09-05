// Divide the Cash (25858)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, d] = input[0].split(' ').map(Number);
const problems = [];

for (let i = 1; i <= n; ++i) {
  problems.push(Number(input[i]));
}

const totalProblems = problems.reduce((acc, curr) => acc + curr, 0);
const reward = d / totalProblems;

for (const problem of problems) {
  console.log(problem * reward);
}
