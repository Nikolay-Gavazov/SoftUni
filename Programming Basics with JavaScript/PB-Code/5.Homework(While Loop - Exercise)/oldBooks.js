function oldBooks(input) {
    let index = 0;
    let favBook = input[index];
    index++;
    let currentBook = input[index];
    let bookIsFound = false;

    while (currentBook !== 'No More Books') {
        if(favBook === currentBook){
            bookIsFound = true;
            break;
        }
        index++;
        currentBook = input[index];
    }
    if(bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }else{
        console.log(`You checked ${index- 1} books and found it.`);
    }
}oldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])