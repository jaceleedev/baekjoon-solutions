// Every Second Counts (15080)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const startTime = input[0].split(':').map(Number);
const endTime = input[1].split(':').map(Number);

const startTimeToSeconds =
  startTime[0] * 3600 + startTime[1] * 60 + startTime[2];
let endTimeToSeconds = endTime[0] * 3600 + endTime[1] * 60 + endTime[2];

if (endTimeToSeconds <= startTimeToSeconds) {
  endTimeToSeconds += 24 * 3600;
}

console.log(endTimeToSeconds - startTimeToSeconds);
