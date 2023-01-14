let array = [8, 7, 8, 11, 7, 5, 8, 10];

//console.log(array);


let furstMaxItegerInArray= Math.max(...array);
let index1 = array.indexOf(furstMaxItegerInArray);
if (index1 > -1) {
  array.splice(index1, 1);
}

let secondMaxIntegerInArray = Math.max(...array);
let index2 = array.indexOf(secondMaxIntegerInArray);
if(index2 > -1){
    array.splice(index2,1);
}

console.log(furstMaxItegerInArray + ', ' + secondMaxIntegerInArray); 

