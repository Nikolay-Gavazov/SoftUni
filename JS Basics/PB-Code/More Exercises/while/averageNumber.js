function averageNumber(input) {
    let n = Number(input[0]);

    let sum = 0;
    let num = 0;

    for(let i = 1; i <= n; i++){
        num = Number(input[i]);
        sum += num;
    }
    let avg = sum / n;

    console.log(avg.toFixed(2));
}averageNumber([4,
    3,
    2,
    4,
    2
    ])