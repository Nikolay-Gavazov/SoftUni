function combinations(input) {
    let n = Number(input[0]);
    let counter = 0;

    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= n; j++){
            for(let h = 0; h <= n; h++){
                if(i + j + h === n){
                    counter++;
                }
            }
        }

    }

    console.log(counter);
}
combinations(["20"])