// Larger Sport Facility (16099)
// 평소와 다르게 readFileSync에서 에러가 난다. 0으로 고쳐주면 해결된다.
const input = require('fs').readFileSync(0).toString().trim().split('\n');

const t = Number(input[0]);
const answer = [];

for (let i = 1; i <= t; ++i) {
  const [lt, wt, le, we] = input[i].split(' ').map(BigInt);

  const tArea = lt * wt;
  const eArea = le * we;

  if (tArea > eArea) {
    answer.push('TelecomParisTech');
  } else if (tArea < eArea) {
    answer.push('Eurecom');
  } else {
    answer.push('Tie');
  }
}

console.log(answer.join('\n'));
