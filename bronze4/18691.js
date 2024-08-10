// Pokemon Buddy (18691)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; ++i) {
  const [g, c, e] = input[i].split(' ').map(Number);

  if (c >= e) {
    console.log(0);
  } else {
    switch (g) {
      case 1:
        console.log(e - c);
        break;
      case 2:
        console.log((e - c) * 3);
        break;
      case 3:
        console.log((e - c) * 5);
        break;
    }
  }
}
