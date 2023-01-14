let n = 5;
let k = 3;

let n_fak = 1;
for(let i = 1; i<=n; i++) {
  n_fak = n_fak * i;
}

let k_fak = 1;
for(let i = 1; i<=k; i++) {
  k_fak = k_fak * i;
}

console.log(`n!/k! = ${n_fak / k_fak}`);

//Втория метод също работи и е с едно пресмятане по-малко,
// което при големи числа, би било по-бързо.
//за да го пробваш, трябва 1-вия да е закоментиран, без инпута.

// let num = k;
// let product = 1;
//   while (num <= n){
//     product = product * num;
//     num++;
    
//   }
//   let result = product / k;
//   console.log(`n!/k! = ${result}`);