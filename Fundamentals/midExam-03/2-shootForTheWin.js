function shootForTheWin(input) {

    let targets = input.shift().split(' ').map(Number);
    let lines = input.shift();
    let shotTargets = 0;

    while (lines != 'End') {
        let index = Number(lines);
        let value = 0;
        if (index < targets.length && index >= 0) {
            value = targets[index];
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] == -1) {

                } else {
                    if (value < targets[i]) {
                        targets[i] -= value;
                    } else {
                        targets[i] += value;
                    }

                }
            }
            targets[index] = -1;
            shotTargets++

        }

        lines = input.shift();
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);

}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

