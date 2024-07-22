// Schronisko (8760)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const z = Number(input[0]);

for (let i = 1; i <= z; ++i) {
  const [w, k] = input[i].split(' ').map(Number);
  const size = w * k;

  console.log(Math.floor(size / 2));
}
