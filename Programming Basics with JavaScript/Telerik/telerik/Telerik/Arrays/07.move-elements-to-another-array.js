let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [];

let moveCount = 3;

console.log(`Before element movement.`);
console.log(array1);
console.log(array2);

for (let i = 0; i < moveCount; i++) {
  let movedElement = array1.pop();
  array2.push(movedElement);
}

console.log(`After element movement.`);
console.log(array1);
console.log(array2);
