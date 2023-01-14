let input = [
    '2',
    '22',
    '1'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let a = +gets();
  let b = +gets();
  let c = +gets();

  // print(Math.max(a,b,c)) // the problem can be solved only like this, however I have also added below a solution with conditionals 
  //Solution with conditionals: 

  if (a>= b && a>= c) {
    print(a);
  } else if (a>=c && a>=b) {
    print(a);
  } else if (b>=a && b>=c) {
    print(b);
  } else if (b>=c && b>=a) {
    print(b);
  } else if (c>=a && c>=b) {
    print(c)
  } else if (c>=b && c>=a) {
    print(c);
  };
  