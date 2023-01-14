let firstString = "owne";
let secondString = "owned";

let firstStringAsArray = Array.from(firstString);
let secondStringAsArray = Array.from(secondString);

if(firstStringAsArray.length === secondStringAsArray.length){
    console.log('Equal');
}else if(firstStringAsArray > secondStringAsArray){
    console.log('Furst');
}else(console.log('Second'))