function squareOfStars(n) {

    if (!n) {
        for (let i = 0; i < 5; i++) {
            let result = '*';

            for (let j = 1; j < 5; j++) {
                result += ' *';
            }
            console.log(result);
        }
    } else {
        for (let i = 0; i < n; i++) {
            let result = '*';

            for (let j = 1; j < n; j++) {
                result += ' *';
            }
            console.log(result);
        }
    }

}
squareOfStars(2)