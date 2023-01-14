function addAndRemoveElements(array) {
    let count = 1;
    let result = [];
    array.forEach(el => {
        switch (el) {
            case 'add':
                result.push(count);
                count++;
                break;
            case 'remove':
                result.pop();
                count++;
                break;
        }
    });
    result.length <= 0 ? console.log('Empty') : console.log(result.join('\n'));
}
addAndRemoveElements(['remove', 'remove', 'remove'])