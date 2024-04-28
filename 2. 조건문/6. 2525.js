function getCompletionTime(hour, min, requiredMin) {
  const totalMin = (hour * 60 + min + requiredMin) % 1440;
  const completionHour = Math.floor(totalMin / 60);
  const completionMin = totalMin % 60;

  return `${completionHour} ${completionMin}`;
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [hour, min] = input[0].split(' ').map(Number);
const requiredMin = Number(input[1]);

console.log(getCompletionTime(hour, min, requiredMin));
