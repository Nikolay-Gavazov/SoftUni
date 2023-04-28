function reverseString(input){

    let string = input;

    let array = string.split('').reverse().join('');

    console.log(array);
}
reverseString('Hello')