// Sounds fishy! (6764)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let previous = Number(input[0]);
let isRising = false;
let isDiving = false;
let isConstant = false;

for (let i = 1; i < input.length; ++i) {
  const depth = Number(input[i]);

  if (previous > depth) {
    isDiving = true;
  } else if (previous < depth) {
    isRising = true;
  } else {
    isConstant = true;
  }

  previous = depth;
}

if (isRising && !isDiving && !isConstant) {
  console.log('Fish Rising');
} else if (isDiving && !isConstant && !isRising) {
  console.log('Fish Diving');
} else if (isConstant && !isRising && !isDiving) {
  console.log('Fish At Constant Depth');
} else {
  console.log('No Fish');
}
