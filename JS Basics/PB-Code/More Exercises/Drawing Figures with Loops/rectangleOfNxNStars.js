function rectangleOfNxNStars(input) {
    let n = Number(input[0]);

    for(let i = 0; i < n; i++){
        let res = '';
        for(let j = 0; j < n; j++){
            res += '*';
        }
        console.log(res);
    }

}rectangleOfNxNStars(['3'])