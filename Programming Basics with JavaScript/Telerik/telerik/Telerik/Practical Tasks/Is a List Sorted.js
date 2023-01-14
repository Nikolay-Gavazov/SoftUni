let input = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,8,2,3,4'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let output = false;
for (let i = 0; i < n; i++) {
    let list = gets().split(',').map(Number);
    for (let j = 1; j <= list.length - 1; j++) {
        if (list[j-1] <= list[j]) {
           output = true;
        }else {
            output = false;
            break;
        }
        
    }
    print(output);
}
