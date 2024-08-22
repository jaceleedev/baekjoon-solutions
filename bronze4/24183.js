// Affischutskicket (24183)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [envelopeWeight, posterWeight, infoWeight] = input[0]
  .split(' ')
  .map(Number);

const envelopeArea = 2 * (0.229 * 0.324);
const posterArea = 2 * (0.297 * 0.42);
const infoArea = 0.21 * 0.297;

const total =
  envelopeWeight * envelopeArea +
  posterWeight * posterArea +
  infoWeight * infoArea;

console.log(total.toFixed(6));
