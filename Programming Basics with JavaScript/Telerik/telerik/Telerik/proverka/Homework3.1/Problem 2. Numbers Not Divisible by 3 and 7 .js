let input = [10]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +input;
let FinalOutput = ``;

for (let ControlNumber = 1; ControlNumber <= n; ControlNumber++) {
    if (((ControlNumber % 3 === 0 || ControlNumber % 7 === 0))) {
        continue;
    } FinalOutput += ControlNumber + ` `;
}
    print(FinalOutput.trim());
