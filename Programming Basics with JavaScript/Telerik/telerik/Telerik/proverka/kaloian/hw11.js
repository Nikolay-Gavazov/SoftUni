let input = [
    '12:59 PM',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let timeInput = gets();

  if (timeInput.length == 7) {
  let hour = Number(timeInput.substring(0,1));
  let timeOfDay = timeInput.substring(5,7);
   
    if (hour >= 1 && hour <=12 && timeOfDay === "PM") {
        print('beer time');
      } else if (hour >=1 && hour <3 && timeOfDay === "AM") {
        print('beer time')
      } else if (hour >= 3 && hour<=12 && timeOfDay === "AM") {
        print('non-beer time')
      }
  
  } else if (timeInput.length == 8) {
  let hour = Number(timeInput.substring(0,2));
  let timeOfDay = timeInput.substring(6,8);
   
      if (hour >= 1 && hour <=12 && timeOfDay === "PM") {
          print('beer time');
        } else if (hour >=1 && hour <3 && timeOfDay === "AM") {
          print('beer time')
        } else if (hour >= 3 && hour<=12 && timeOfDay === "AM") {
          print('non-beer time')
        }
  } else {
    print('invalid time');
  }

