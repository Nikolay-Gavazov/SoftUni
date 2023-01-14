let input = ['kola'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let data = gets();
let typeOfInput = isNaN(data);
let result = ''

if (typeOfInput === false) {
    result = (Number(data) + 1);
} else {
    for (let i = data.length - 1; i >= 0; i--) {        
    result += data[i];
 }
}
print (result)

