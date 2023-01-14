let input = ['1,2,2,2,2,18,3,12'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let chars = gets().split(',');

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

print(uniqueChars.toString());

// for (let i = 1; i < list.length; i++){
//     if (list[i-1] === list[i] || list[i-1] === list[i+1]){
//         list.splice(i, 1);
//         i = 0;
//     }
// }print(list.toString());
