function addAndRemove(array) {

    let length = array.length;
    let result = [];

    let command = '';

    for (let i = 0; i <= length; i++) {
        command = array[i];
        switch (command) {
            case 'add':
                result.push(i + 1);
                break;
            case 'remove':
                result.pop();
                break;
        }
    }
    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }

}
addAndRemove(['add', 'add', 'remove', 'add', 'add','remove', 'remove', 'remove'])