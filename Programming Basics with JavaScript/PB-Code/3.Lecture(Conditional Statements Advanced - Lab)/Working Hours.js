function workingHours(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (time >= 10 && time <= 18) {
        if (day == 'Sunday'){
            console.log('closed');
        }else {
            console.log('open');
        }
    }else {
        console.log('closed');
    }
}
workingHours(["19", "Friday"])




//'Monday' || day == 'Tuesday' || day == 'wednesday' || day == 'Thursday')