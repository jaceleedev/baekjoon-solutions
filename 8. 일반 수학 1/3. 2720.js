const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
const changeTypes = [25, 10, 5, 1];
let answer = '';

for (let i = 1; i <= t; ++i) {
  const c = Number(input[i]);
  const changes = getChanges(c, changeTypes);

  answer += `${changes}\n`;
}

console.log(answer);

function getChanges(c, changeTypes) {
  const answer = [];

  for (const type of changeTypes) {
    const max = Math.floor(c / type);

    answer.push(max);

    c %= type;
  }

  return answer.join(' ');
}
