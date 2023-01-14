function eggs(input) {

    const text = input.shift();
    const pattern = /[\@|#]+(?<color>[a-z]{3,})[\@|#]+\W*([\/]+(?<value>[0-9]+)[\/]+)/gm;
    let match = text.matchAll(pattern);

    for (let el of match) {
        console.log(`You found ${el.groups.value} ${el.groups.color} eggs!`);
    }
}
eggs((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']))