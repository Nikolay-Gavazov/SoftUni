let input = ['3',
 'true'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputType = +gets();
let inputData = gets();

switch (inputType) {
    case 1:
        inputData++;
        break;
    case 2:
        inputData += '*';
        break;
    case 3:
        inputData === "true" ? inputData = false : inputData = true;
        break;
}

print(inputData);