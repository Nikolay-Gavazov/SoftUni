function invalidNumber(input) {
    let num = Number(input[0]);

    switch (true) {
        case (num == 0):
            
        case (num >= 100 && num <= 200):
            break;
        default:
            console.log('invalid');
    }

}
invalidNumber(["1000"])
