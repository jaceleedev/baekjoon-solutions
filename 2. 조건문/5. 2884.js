function getAlarmTime(hour, min) {
  let alarmHour = hour;
  let alarmMin = min;

  if (min >= 45) {
    alarmMin -= 45;
  } else {
    alarmMin = alarmMin + 60 - 45;

    if (alarmHour === 0) {
      alarmHour = 23;
    } else {
      alarmHour -= 1;
    }
  }

  return `${alarmHour} ${alarmMin}`;
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [hour, min] = input[0].split(' ').map(Number);

console.log(getAlarmTime(hour, min));
