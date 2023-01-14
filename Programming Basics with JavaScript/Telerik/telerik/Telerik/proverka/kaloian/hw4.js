let input = [
    '2',
    '-2',
    '0'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let a = +gets();
  let b = +gets();
  let c = +gets();
  
  if ((a+b+c) > 0) {
      print('+');
  } else if ((a+b+c) < 0) {
    print('-');
  } else if ((a+b+c) == 0) {
    print('0');
  }