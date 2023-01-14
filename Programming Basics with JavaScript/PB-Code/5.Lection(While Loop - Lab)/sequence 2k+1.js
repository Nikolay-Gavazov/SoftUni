function sequence(input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = (counter * 2) + 1;
    }
}
sequence(["31"])