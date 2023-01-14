let input = [
    '5.5',
    '6.5'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let a = +gets();
  let b = +gets();
  
  if (a > b) {
    print(b + ' ' + a);
  } else {
    print(a + ' ' + b);
  }