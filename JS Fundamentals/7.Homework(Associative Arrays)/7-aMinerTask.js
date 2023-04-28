function aMinerTask(input) {

    let resources = {};

    let length = input.length;

    for (let i = 0; i < length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }

    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }

}
aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])