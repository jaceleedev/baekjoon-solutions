// Which Alien? (6778)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const antenna = Number(input[0]);
const eyes = Number(input[1]);

if (antenna >= 3 && eyes <= 4) {
  console.log('TroyMartian');
}

if (antenna <= 6 && eyes >= 2) {
  console.log('VladSaturnian');
}

if (antenna <= 2 && eyes <= 3) {
  console.log('GraemeMercurian');
}
