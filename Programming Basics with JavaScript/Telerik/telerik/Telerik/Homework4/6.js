let input = '7 8 9 8 7';

let array = input.split(' ');
let length = array.length;

let isSymmetric = true;

for (let i = 0; i < length / 2; i++) {
  if (array[i] !== array[length - i - 1]) {
    isSymmetric = false;
  }
}
if (isSymmetric === true) {
  console.log('Yes')
} else
  console.log('No');

