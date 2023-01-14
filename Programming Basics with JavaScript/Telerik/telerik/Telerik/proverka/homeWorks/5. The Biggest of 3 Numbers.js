
// Input.
let input = [
    '-2',
    '7',
    '9',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();
let c = +gets();

//най-лесен вариант...
print(Math.max(a, b, c))

//или ако трябва да използваме conditionals какъвто е урока...
let first;

if (a > b && a > c){
    first = a;
}else if (b > a && b > c){
    first = b;
}
else if(c > b && c > a){
    first = c;
}

print(first);



