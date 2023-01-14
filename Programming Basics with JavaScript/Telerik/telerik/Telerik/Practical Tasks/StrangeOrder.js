let input = ['3,-12,0,0,13,5,1,0,-2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',');

let negative_output = [];
let zero_output = [];
let positive_output = [];

for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        negative_output.push(arr[i]);
    }
    if (arr[i] == 0){
        zero_output.push(arr[i]);
    }
    if (arr[i] > 0){
        positive_output.push(arr[i]);
    }
}

print(negative_output.concat(zero_output).concat(positive_output).toString());



// input ['3,-12,0,0,13,5,1,0,-2'] 
//     -> [-12, -2]
//     -> [0, 0, 0]
//     -> [3, 13, 5, 1]
// output [-12, -2, 0, 0, 0, 3, 13, 5, 1]

// answer [-12,-2,0,0,0,3,13,5,1]


