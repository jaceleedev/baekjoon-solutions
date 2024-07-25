// Communication Channels (11121)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; ++i) {
  const [inputs, outputs] = input[i].split(' ');

  if (inputs === outputs) {
    console.log('OK');
  } else {
    console.log('ERROR');
  }
}
