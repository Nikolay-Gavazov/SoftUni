function employees(array) {

    let employees = {};

    for (let element of array) {
        let name = element;
        let number = name.length;
        employees[name] = number
    }

    for (let key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }

}
employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])