console.log(`Please choose a type:
1 --> number	
2 --> boolean	
3 --> string`);

let input = [
    '3',
    'hello'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let userChoice = +gets();
   
  switch (userChoice) {
    case 1:
      print('Please enter a number:');
      let userNumber = +gets() + 1;
      print(userNumber);
      break;

    case 2:
      print('Please enter a boolean:');
      let userBoolean = gets();
     
        if (userBoolean === "true") {
          print(false);
        } else if (userBoolean === "false") {
          print(true);
        }
        break;

    case 3:
        print('Please enter a string:');
        let userString = gets();
        print(userString+'*');
      break;

      default:
        print('Please choose a type');
      break;
  }