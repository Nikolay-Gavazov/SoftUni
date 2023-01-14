function dictionary(input) {

    let objects = [];
    let i = 0;
    input.forEach(element => {
        let object = JSON.parse(element);
        objects[i] = object;
        i++;
    });

    objects.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))

    for (let i = 1; i < objects.length; i++) {
        let nextKey = Object.keys(objects[i]);
        let key = Object.keys(objects[i - 1])

        if (key[0] == nextKey[0]) {
            objects.splice(i - 1, 1);
        }
    }

    objects.forEach(element => {
        for (let key in element) {
            console.log(`Term: ${key} => Definition: ${element[key]}`);
        }
    });

}
dictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}',
    '{"Coffee":"A cold drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}'])