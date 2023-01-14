let input = ['2 1 1 6 3'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(' ').map(Number);

let evenProduct = 1;
let oddProduct = 1;
let result = '';

for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];

    if (index % 2 === 0) {
        evenProduct *= element;
    } else {
        oddProduct *= element;
    } 
}

if (evenProduct === oddProduct) {
    result = 'yes';
} else {
    result = 'no';
}

print(result);