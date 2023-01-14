let array = [2, 4, 6, 6, 3, 2];
let length = array.length;

let isSymmetric = true;

for (let i = 0; i < length / 2; i++) {
  if (array[i] !== array[length - i - 1]) {
    isSymmetric = false;
    break;
  }
}

console.log(`The array is symmetric: ${isSymmetric}`);
