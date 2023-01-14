function destinations(input) {

    const pattern = /(=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/gm

    const destinations = input.matchAll(pattern);
    const resultArr = [];
    let length = 0;

    for (let el of destinations) {
        length += (el.groups.destination).length;
        resultArr.push(el.groups.destination);
    }

    console.log(`Destinations: ${resultArr.join(', ')}`);
    console.log(`Travel Points: ${length}`);
}
destinations("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
