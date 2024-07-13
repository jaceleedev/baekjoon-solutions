// 2033년 밈 투표 (29731)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const promises = [
  'Never gonna give you up',
  'Never gonna let you down',
  'Never gonna run around and desert you',
  'Never gonna make you cry',
  'Never gonna say goodbye',
  'Never gonna tell a lie and hurt you',
  'Never gonna stop',
];
const set = new Set(promises);
let isChanged = false;

for (let i = 1; i <= n; ++i) {
  if (!set.has(input[i])) {
    isChanged = true;
    break;
  }
}

console.log(isChanged ? 'Yes' : 'No');
