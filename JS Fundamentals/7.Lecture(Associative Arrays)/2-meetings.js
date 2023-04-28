function meetings(input) {

    let meetings = {};

    for (let line of input) {
        let [day, person] = line.split(' ');


        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }


    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }

}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])