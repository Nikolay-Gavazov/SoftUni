function ladybugs(input) {

    const array = [];
    const size = input.shift();
    const indexes = input.shift().split(' ');
    for (let i = 0; i < size; i++) {
        let index = i.toString();
        if (indexes.includes(index)) {
            array[i] = 1;
        } else {
            array[i] = 0;
        }
    }

    while (input.length > 0) {
        let line = input.shift().split(' ');
        let index = Number(line[0]);
        let comand = line[1];
        let flyLength = Number(line[2]);

        switch (comand) {
            case 'right':
                if (array[index] == 1 && index >= 0 && index < array.length) {
                    for (let i = index; i < array.length; i++) {
                        if (array[i + flyLength] == 0 && i + flyLength < array.length) {
                            array[index] = 0;
                            array[i + flyLength] = 1;
                            break;
                        } else if (array[i + flyLength] == 1 && (i + flyLength) + 1 < array.length) {
                            array[index] = 0;
                            array[i + flyLength + 1] = 1;
                            break;
                        } else {
                            array[index] = 0;
                            break;
                        }
                    }
                }
                break;
            case 'left':
                if (array[index] == 1 && index >= 0 && index < array.length) {
                    for (let i = index; i >= 0; i--) {
                        if (array[i - flyLength] == 0 && i - flyLength >= 0) {
                            array[index] = 0;
                            array[i - flyLength] = 1;
                            break;
                        } else if (array[i - flyLength] == 1 && (i - flyLength) - 1 >= 0) {
                            array[index] = 0;
                            array[i - flyLength - 1] = 1;
                            break;
                        } else {
                            array[index] = 0;
                            break;
                        }
                    }
                }
                break;
        }


    }

    console.log(array.join(' '));
}
ladybugs([ 5, '3', '3 left 2', '1 left -2'])