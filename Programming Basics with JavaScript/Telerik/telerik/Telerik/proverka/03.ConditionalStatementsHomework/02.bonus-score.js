let input = [
    '70'

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let score = Number(gets());
let result = 0;

if (score >= 1 && score <= 3) {
   result = score * 10;
} else if (score <= 6) {
   result = score * 100;
} else if (score <= 9) {
   result = score * 1000;
} 

if (score < 0 || score > 9) {
    print(`invalid score`);
} else {
    print(result);
}