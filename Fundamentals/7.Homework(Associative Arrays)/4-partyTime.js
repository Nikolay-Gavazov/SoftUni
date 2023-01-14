function partyTime(input) {

    let vipGuests = [];
    let regularGuests = [];

    let currentEl = input.shift();

    while (currentEl !== 'PARTY') {

        if (!isNaN(currentEl[0])) {
            vipGuests.push(currentEl);
        } else {
            regularGuests.push(currentEl);
        }
        currentEl = input.shift();
    }
    let allGuests = vipGuests.concat(regularGuests);
    input.forEach(el => {
        allGuests.splice(allGuests.indexOf(el), 1)
    });

    console.log(allGuests.length);
    allGuests.forEach(el => {
        console.log(el);
    });
}
partyTime(['7IK9Yo0h',

    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])