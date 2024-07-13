// Arno's Sleep Schedule (29863)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sleepTime = Number(input[0]);
const wakeTime = Number(input[1]);

if (wakeTime >= sleepTime) {
  console.log(wakeTime - sleepTime);
} else {
  console.log(24 - sleepTime + wakeTime);
}
