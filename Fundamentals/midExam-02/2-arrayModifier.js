function arrayModifier(input) {

    let array = input.shift().split(' ').map(Number);
    let lines = input.shift().split(' ');

    while (lines != 'end') {
        let comand = lines[0];
        let index1 = Number(lines[1]);
        let index2 = Number(lines[2]);

        switch (comand) {
            case 'swap':
                let firstEl = array[index1];
                let secondEl = array[index2];
                array[index1] = secondEl;
                array[index2] = firstEl;
                break;
            case 'multiply':
                array[index1] = array[index1] * array[index2];
                break;
            case 'decrease':
                for (let i = 0; i < array.length; i++) {
                    array[i]--;
                }

        }
        lines = input.shift().split(' ');
    }

    console.log(array.join(', '));

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]

)