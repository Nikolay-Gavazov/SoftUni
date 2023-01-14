let input = [
    '12',
    '4',
    '5'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let a = +gets();
  let b = +gets();
  let c = +gets();


  if (a>= b && a>= c && b>=c) {
    print(a + ' ' + b + ' ' + c);
  } else if (a>=c && a>=b && c>=b) {
    print(a + ' ' + c + ' ' + b);
  } else if (b>=a && b>=c && a>=c) {
    print(b + ' ' + a + ' ' + c);
  } else if (b>=c && b>=a && c>=a) {
    print(b + ' ' + c + ' ' + a);
  } else if (c>=a && c>=b && a>=b) {
    print(c + ' ' + a + ' ' + b)
  } else if (c>=b && c>=a && b>=a) {
    print(c + ' ' + b + ' ' + a);
  };
 