function cake(input){
    let index = 0;
    let a = Number(input[index]);
    index++;

    let b = Number(input[index]);
    index++;

    let cake = a * b;
    
    let comand = (input[index]);
    index++;

    let pieces = 0;

    while (comand !== 'STOP') {
        pieces += Number(comand);
        if(pieces >= cake){
            break;
        }
        comand = (input[index]);
        index++;
    }

    let diff = Math.abs(cake - pieces);

    if(cake >= pieces){
        console.log(`${diff} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }
}cake(["10",

"10",

"20",

"20","20", "20", "21"])