function listOfNames(array) {

    array.sort((a, b) => a.localeCompare(b))
        .forEach((el, index) => {
            console.log(`${index + 1}.${el}`);
        });;

}
listOfNames(["John",

"Bob",

"Christina",

"Ema"])