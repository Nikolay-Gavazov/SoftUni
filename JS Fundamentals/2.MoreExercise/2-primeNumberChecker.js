function primeNumberChecker(num) {

    if (num % 2 === 0 || num % 3 === 0) {
        if (num === 2 || num === 3) {
            console.log('true');
        } else {
            console.log('false');
        }

    } else {
        console.log('true');
    }

}
primeNumberChecker(4)