// Andando no tempo (13580)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const credits = input[0].split(' ').map(Number);
credits.sort((a, b) => a - b);

if (credits[0] === credits[1] || credits[1] === credits[2]) {
  console.log('S');
} else if (credits[0] + credits[1] === credits[2]) {
  console.log('S');
} else {
  console.log('N');
}
