// ICPC (16727)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [p1, s1] = input[0].split(' ').map(Number);
const [s2, p2] = input[1].split(' ').map(Number);

const p = p1 + p2;
const s = s1 + s2;

if (p > s) {
  console.log('Persepolis');
} else if (p < s) {
  console.log('Esteghlal');
} else {
  if (s1 > p2) {
    console.log('Esteghlal');
  } else if (p2 > s1) {
    console.log('Persepolis');
  } else {
    console.log('Penalty');
  }
}
