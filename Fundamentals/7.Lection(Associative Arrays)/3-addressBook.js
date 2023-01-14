function addressBook(input) {

    let addressBook = {}

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let result = Object.entries(addressBook);

    result.sort((a, b) => a[0].localeCompare(b[0]));

    result.forEach(el => {
        console.log(`${el[0]} -> ${el[1]}`);
    });

}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])