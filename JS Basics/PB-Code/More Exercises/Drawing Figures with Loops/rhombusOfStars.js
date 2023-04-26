function rhombusOfStars(input) {

    let n = Number(input[0]);
    let output = ''; 

    for(let i = 1; i <= n; i++){
        output += ' *';
        console.log(`${output}`);

    }
    

}rhombusOfStars([3])