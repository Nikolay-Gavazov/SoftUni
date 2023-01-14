function shoppingList(input) {

    let list = input.shift().split('!');
    let line = input.shift();

    while (line != 'Go Shopping!') {
        line = line.split(' ');
        let comand = line[0];
        let firstItem = line[1];
        let secondItem = line[2];

        switch (comand) {
            case 'Urgent':
                let indexOfUrgent = list.indexOf(firstItem);
                if (indexOfUrgent == -1) {
                    list.unshift(firstItem);
                }
                break;
            case 'Unnecessary':
                let indexOfUnnecessary = list.indexOf(firstItem);
                if (indexOfUnnecessary > -1) {
                    list.splice(indexOfUnnecessary, 1);
                }
                break;
            case 'Correct':
                let indexOfCorrect = list.indexOf(firstItem);
                if (indexOfCorrect > -1) {
                    list.splice(indexOfCorrect, 1, secondItem);
                }
                break;
            case 'Rearrange':
                let indexOfRearrange = list.indexOf(firstItem);
                if (indexOfRearrange > -1) {
                    list.splice(indexOfRearrange, 1);
                    list.push(firstItem);
                }
                break;
        }



        line = input.shift();
    }

    console.log(list.join(', '));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Grapes",

    "Correct Pepper Onion", "Rearrange Grapes", "Correct Milk Potatoes", "Go Shopping!"])