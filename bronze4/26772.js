// Poziome serca (26772)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const heart = [
  ' @@@   @@@ ',
  '@   @ @   @',
  '@    @    @',
  '@         @',
  ' @       @ ',
  '  @     @  ',
  '   @   @   ',
  '    @ @    ',
  '     @     ',
];

for (let i = 0; i < heart.length; ++i) {
  let line = '';

  for (let j = 0; j < n; ++j) {
    if (j > 0) {
      line += ' ';
    }
    line += heart[i];
  }

  console.log(line);
}
