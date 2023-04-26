function onTimeForTheExam(input) {
    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourOfArrive = Number(input[2]);
    let minutesOfArrive = Number(input[3]);

    let timeOfExam = (hourOfExam * 60) + minutesOfExam;
    let timeOfArrive = (hourOfArrive * 60) + minutesOfArrive;

    let diff = Math.abs(timeOfExam - timeOfArrive);

    let hours = Math.floor(diff / 60);
    let mins = diff % 60;

    if (timeOfExam < timeOfArrive) {
        console.log('Late');
        if (diff < 60) {
            console.log(`${mins} minutes after the start`);
        } else {
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else {
                console.log(`${hours}:${mins} hours after the start`);
            }
        }
    } else if (timeOfExam >= timeOfArrive) {
        if (diff === 0) {
            console.log('On time');
        } else if (diff <= 30) {
            console.log('On time');
            console.log(`${mins} minutes before the start`);
        } else {
            console.log('Early');
            if (hours === 0) {
                if (mins < 10) {
                    console.log(`0${mins} minutes before the start`);
                } else {
                    console.log(`${mins} minutes before the start`);
                }
            } else if (mins < 10) {
                console.log(`${hours}:0${mins} hours before the start`);
            } else {
                console.log(`${hours}:${mins} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["11", "30", "10", "55"])