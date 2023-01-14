function activationKeys(input) {

    let activationKey = input.shift();
    let tempKey = ''
    let line = input.shift();

    while (line != 'Generate') {
        line = line.split('>>>');
        const comand = line[0];

        switch (comand) {
            case 'Contains':
                {
                    const subString = line[1];
                    if (activationKey.includes(subString)) {
                        console.log(`${activationKey} contains ${subString}`);
                    } else {
                        console.log('Substring not found!');
                    }
                }
                break;
            case 'Flip':
                {
                    const casing = line[1];
                    const startIndex = Number(line[2]);
                    const endIndex = Number(line[3]);
                    if (casing == 'Upper') {
                        tempKey = activationKey.substring(startIndex, endIndex);
                        let upper = tempKey.toUpperCase();
                        activationKey = activationKey.replace(tempKey, upper);
                    } else {
                        tempKey = activationKey.substring(startIndex, endIndex);
                        let lower = tempKey.toLowerCase();
                        activationKey = activationKey.replace(tempKey, lower);
                    }
                    console.log(activationKey);
                }
                break;
            case 'Slice':
                {
                    const startIndex = Number(line[1]);
                    const endIndex = Number(line[2]);
                    tempKey = activationKey.substring(startIndex, endIndex);
                    activationKey = activationKey.replace(tempKey, '');
                    console.log(activationKey);
                }
                break;
        }

        line = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"])