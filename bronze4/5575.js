// 타임 카드 (5575)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; ++i) {
  const time = input[i].split(' ').map(Number);

  let hour = time[3] - time[0];
  let min = time[4] - time[1];
  let seconds = time[5] - time[2];

  if (seconds < 0) {
    min -= 1;
    seconds += 60;
  }

  if (min < 0) {
    hour -= 1;
    min += 60;
  }

  console.log(`${hour} ${min} ${seconds}`);
}
