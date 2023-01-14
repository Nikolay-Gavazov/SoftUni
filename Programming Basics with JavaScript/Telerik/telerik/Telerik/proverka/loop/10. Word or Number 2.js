let input = ['2', 
             '4',
             '2',
                ] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let sum = 0;
let finalExpression = ' ';

for (let i = 1; i <= n; i++) {
     let data = gets();
     let typeOfInput = isNaN(data);
    
   if (typeOfInput === false) {
       sum += Number(data);
   } else {
      finalExpression += '-' + data;
   }
}
if (finalExpression === ' ') {
    print(`
    no words
    ${sum}`)
  } else {
      print(`
      ${finalExpression.slice(2)}
      ${sum}`)
  }
  
