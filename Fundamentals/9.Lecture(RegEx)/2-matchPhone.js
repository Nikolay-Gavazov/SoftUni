function matchPhone(input) {

    const numbers = input.join(',')
    const pattern = /\+359([ -])\d\1\d{3}\1\d{4}\b/g
    let matches = numbers.match(pattern);

    console.log(matches.join(', '));

}
matchPhone(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'])