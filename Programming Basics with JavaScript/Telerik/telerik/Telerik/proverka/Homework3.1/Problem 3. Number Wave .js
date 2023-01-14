let input = [ 6 ]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +input;
let FinalOutput = ``;
let ControlNumber2 = (n-1);

for ( let ControlNumber= 1;ControlNumber<= n;ControlNumber++ ) {
    FinalOutput += ControlNumber + ` `;
}
while (ControlNumber2<=n && ControlNumber2>=1) {
    FinalOutput += ControlNumber2 + ` `;
    ControlNumber2--;
}
print(FinalOutput.trim());