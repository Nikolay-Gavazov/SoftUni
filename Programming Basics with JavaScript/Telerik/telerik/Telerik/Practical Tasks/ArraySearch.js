let input = ['1,1,1,1,1,1,1,1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',').sort();
let N = arr.length;
let answer = [];


for (let i = 1; i <= N; i++) {
    answer[i-1] = i;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (answer[j] == arr[i]) {
            answer.splice(j, 1);
        }
    }
}
print(answer.toString());