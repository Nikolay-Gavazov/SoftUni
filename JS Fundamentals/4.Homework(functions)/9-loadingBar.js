function loadingBar(number) {

    let percentage = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - (number / 10));

    if (number === 100) {
        console.log('100% Complete!');
    } else if (number < 100) {
        console.log(`${number}% [${percentage}${dots}]`);
        console.log('Still loading...');
    }

}
loadingBar(30)