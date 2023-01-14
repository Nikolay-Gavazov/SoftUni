let input = ['2 5 7 8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(' ').map(Number);

let sum = 0;

for (let i = 0; i < numbers.length; i++){
    const element = +numbers[i];
    if(element % 2 ===1){
        sum+= element;
    }
}
console.log(sum);
