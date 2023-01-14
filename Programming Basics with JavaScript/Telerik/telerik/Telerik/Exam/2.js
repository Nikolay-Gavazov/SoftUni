let input = ['My, Keyboard, Is, Broken, Sorry, Maybe, I, Shall, Try, A, Typewriter'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(', ');
let firstLine = 'q, Q, w, W, e, E, r, R, t, T, y, Y, u, U, i, I, o, O, p, P';
let secondLine = 'a, A, s, S, d, D, f, F, g, G, h, H, j, J, k, K, l, L';
let thirdLine = 'z, Z, x, X, c, C, v, V, b, B, n, N, m, M';
let output = [];
let word = '';
// print(string)

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
    if (arr[i] === firstLine[j]){
        output += arr[i];

    } 
    }
}
// for (let i = 0; i < secondLine.length; i++){
//     for (let j = 0; j < secondLine.length; j++){
//     if (string[i] === secondLine[j]){
//         output += string[i];
//     } 
//     }
// }
// for (let i = 0; i < thirdLine.length; i++){
//     for (let j = 0; j < thirdLine.length; j++){
//     if (string[i] === thirdLine[i]){
//         output += string[i];
//     } 
//     }
// }
print(output.toString());