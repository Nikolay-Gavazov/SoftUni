function getFibonator(){
    let num = 1;
    let previous = 0;
   return function fib(){
        let fibNum = num + previous;
        num = previous;
        previous = fibNum;
        return fibNum
    }
}
let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13

console.log(fib());
console.log(fib());