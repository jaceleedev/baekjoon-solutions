// Lunacy (4714)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const x = Number(input[i]);
  const y = x * 0.167;

  console.log(
    `Objects weighing ${x.toFixed(2)} on Earth will weigh ${y.toFixed(
      2
    )} on the moon.`
  );
}
