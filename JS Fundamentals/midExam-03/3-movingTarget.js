function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line != 'End') {
        line = line.split(' ');
        let comand = line[0];
        let index = Number(line[1]);
        let power = Number(line[2]);

        switch (comand) {
            case 'Shoot':
                if (targets[index]) {
                    targets[index] -= power;
                }
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
                break;
            case 'Add':
                if (targets[index]) {
                    targets.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let minIndex = index - power;
                let maxIndex = index + power;
                if (minIndex > -1 && maxIndex < targets.length) {
                    targets.splice(index - power, power * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
        }


        line = input.shift();
    }

    console.log(targets.join('|'));

}
movingTarget(["1 2 3 4 5",

    "Strike 0 1",

    "End"])