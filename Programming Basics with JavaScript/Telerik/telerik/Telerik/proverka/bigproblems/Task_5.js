let numbers = [8, 2, 1, 3, 5, 8, 9, 11, 11, 2, 5];
numbers.sort(function(a,b){ 
    return a - b;
  });
console.log(numbers[numbers.length - 1]);
console.log(numbers[numbers.length - 2]);