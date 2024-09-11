// Fold the Paper Nicely (26340)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  let [w, h, c] = input[i].split(' ').map(Number);

  while (c > 0) {
    if (w >= h) {
      w = Math.floor(w / 2);
    } else {
      h = Math.floor(h / 2);
    }

    --c;
  }

  console.log(`Data set: ${input[i]}`);
  console.log(`${Math.max(w, h)} ${Math.min(w, h)}`);
  console.log();
}
