function schoolLibrary(input) {

    let bookShelf = input.shift().split('&');
    let lines = input.shift().split('|');

    while (lines != 'Done') {
        let comand = lines[0].trim();

        switch (comand) {
            case 'Add Book':
                let bookToAdd = lines[1].trim();
                let indexOfAdd = bookShelf.indexOf(bookToAdd);
                if (indexOfAdd == -1) {
                    bookShelf.unshift(bookToAdd);
                }
                break;
            case 'Take Book':
                let bookToRemove = lines[1].trim();
                let indexOfRemove = bookShelf.indexOf(bookToRemove);
                if (indexOfRemove > -1) {
                    bookShelf.splice(indexOfRemove, 1);
                }
                break;
            case 'Swap Books':
                let firstBook = lines[1].trim();
                let secondBook = lines[2].trim();
                let firstBookIndex = bookShelf.indexOf(firstBook);
                let secondBookIndex = bookShelf.indexOf(secondBook);
                if (firstBookIndex > -1 && secondBookIndex > -1) {
                    bookShelf[firstBookIndex] = secondBook;
                    bookShelf[secondBookIndex] = firstBook;
                }
                break;
            case 'Insert Book':
                let bookToInsert = lines[1].trim();
                let indexOfInsert = bookShelf.indexOf(bookToInsert);
                if (indexOfInsert == -1) {
                    bookShelf.push(bookToInsert);
                }
                break;
            case 'Check Book':
                let indexToCheck = Number(lines[1]);
                if (indexToCheck >= 0 && indexToCheck < bookShelf.length) {
                    console.log(bookShelf[indexToCheck]);
                }
                break;
        }

        lines = input.shift().split('|');
    }

    console.log(bookShelf.join(', '));

}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])

