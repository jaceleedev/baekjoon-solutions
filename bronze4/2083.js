// 럭비 클럽 (2083)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const [name, age, weight] = input[i].split(' ');

  if (Number(age) > 17 || Number(weight) >= 80) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
}
