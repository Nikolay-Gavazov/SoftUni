function moving(input) {
    let index = 0;
    let a = Number(input[index]);
    index++;

    let b = Number(input[index]);
    index++;

    let c = Number(input[index]);
    index++;

    let comand = (input[index]);
    index++;

    let box = 0;
    let apartment = a * b * c;

    while (comand !== 'Done') {
        box += Number(comand);
        if(box >= apartment){
            break;
        }
        comand = (input[index]);
        index++;
    }
    let diff = Math.abs(box - apartment);

    if(apartment >= box){
        console.log(`${diff} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
}
moving(["10",

"10",

"2","20", "20", "20", "20", "122"])