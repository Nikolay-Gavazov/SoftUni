function schoolLibrary(input){

    let bookShelf = input.shift().split('&');
    let lines = input.shift().split('| ');
    let lines1 = lines.join('').split(' ')

    console.log(lines1);
    
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])