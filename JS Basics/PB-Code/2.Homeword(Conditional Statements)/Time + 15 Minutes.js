function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let mins = Number(input[1]);

    let hoursToMins = hours * 60;
    let totalTime = hoursToMins + mins + 15;
    let totalHours = Math.floor(totalTime / 60);
    let totalMins = totalTime % 60; 
    
    if (hoursToMins + mins >= 1425 && totalMins < 10) {
        totalHours = 0;
        console.log(`${totalHours}:0${totalMins}`);
    }else if (hoursToMins + mins >= 1425) {
        totalHours = 0;
        console.log(`${totalHours}:${totalMins}`);
    }else if (totalMins < 10) {
        console.log(`${totalHours}:0${totalMins}`);
    }else {
        console.log(`${totalHours}:${totalMins}`)
    }
}
timePlus15Minutes(["12",

"49"])