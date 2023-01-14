let input = [
    'q'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let card = gets();

  if (card === '2') {
      print('yes')
  } else if (card === '3') {
    print('yes')
  } else if (card === '4') {
    print('yes')
  } else if (card === '5') {
    print('yes')
  } else if (card === '6') {
    print('yes')
  } else if (card === '7') {
    print('yes')
  } else if (card === '8') {
    print('yes')
  } else if (card === '9') {
    print('yes')
  } else if (card === '10') {
    print('yes')
  } else if (card === 'J') {
    print('yes')
  } else if (card === 'Q') {
    print('yes')
  } else if (card === 'K') {
    print('yes')
  } else if (card === 'A') {
    print('yes') 
  } else {
      print('no')
  };
 