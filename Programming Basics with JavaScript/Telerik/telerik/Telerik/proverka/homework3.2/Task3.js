let input = [
    '10'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
 
let n = Number(gets()); 
let  wave = '';
let array = [];
  for(let i=1; i<=n; i++){
  wave+=i;  
  array.push(i);
  }
  for(let j=n-1; j>=1; j--){
  wave+=j; 
  array.push(j);
  }
print(array.join(' '));
