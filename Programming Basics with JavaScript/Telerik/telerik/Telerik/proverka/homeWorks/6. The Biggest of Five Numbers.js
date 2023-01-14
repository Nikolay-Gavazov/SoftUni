
// Input.
let input = [
    '-2',
    '-22',
    '1',
    '0',
    '8'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

// по-лесния начин :)
print(Math.max(a, b, c, d, e))

//или ако използваме conditionals какъвто е урока...
let first;

if (a > b && a > c && а > c && a > d && a > e){
    first = a;
}else if (b > a && b > c && b > d && b > e){
    first = b;
}
else if(c > a && c > b && c > d && c > e){
    first = c;
}
else if(d > a && c > b && c > d && c > e){
    first = d;
}else{
    first = e
}

print(first);



