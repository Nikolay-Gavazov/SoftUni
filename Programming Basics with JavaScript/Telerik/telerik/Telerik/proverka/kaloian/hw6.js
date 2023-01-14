let input = [
    '-2',
    '4',
    '3',
    '2',
    '0'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let a = +gets();
  let b = +gets();
  let c = +gets();
  let d = +gets();
  let e = +gets();

print(Math.max(a,b,c,d,e)) // Here the combinations of 5 numbers are 120 so it's not efficient to use conditionals