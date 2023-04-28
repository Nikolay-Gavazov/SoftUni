function searchNumbers(numbers, comands){

    let numbersToTake = Number(comands[0]);
    let numberToDelete = Number(comands[1]);
    let specialNumber = Number(comands[2]);

    let takenNumbers = numbers.slice(0, numbersToTake);
    takenNumbers.splice(0, numberToDelete);

    let counter = 0;
    for(let element of takenNumbers){
        if (element === specialNumber){
            counter++
        }
    }

    console.log(`Number ${specialNumber} occurs ${counter} times.`);

}
searchNumbers([5, 2, 3, 4, 1, 6],

    [5, 2, 3])