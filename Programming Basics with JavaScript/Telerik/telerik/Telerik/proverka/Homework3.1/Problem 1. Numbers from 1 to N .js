let n = [ 5]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(n, 0);

let FinalOutput = ``

for ( ControlNumber = 1 ; ControlNumber <= n; ControlNumber++) {
    FinalOutput += ControlNumber + ` `;
}
print(FinalOutput.trim());