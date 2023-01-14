let list = [1, 2, 4, 8, 7, 34, 200, 2000];
let isSorted = true;
for(let j = 0 ; j < list.length - 1 ; j++){
    if(list[j] > list[j+1]) {
        isSorted = false;
        break;
    }
}
console.log(isSorted ? 'yes' : 'no');