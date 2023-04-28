function race(input) {

    const namePattern = /[A-Za-z]+/gm;
    const numberPattern = /[0-9]+/gm;
    const names = input.shift().split(', ');
    let comand = input.shift();
    let result = {};

    while (comand !== 'end of race') {
        const name = comand.match(namePattern).join('');
        const distance = comand.match(numberPattern).join('')
        let totalDistance = 0;
        for (let el of distance) {
            totalDistance += Number(el);
        }
        if (names.includes(name)) {
            if (!result.hasOwnProperty(name)) {
                result[name] = totalDistance;
            } else {
                result[name] += totalDistance;
            }
        }


        comand = input.shift();
    }

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy,Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])