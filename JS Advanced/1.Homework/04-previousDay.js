function previousDay(year, month, day) {

    let date = new Date(year, month - 1, (day)).toJSON().slice(0, 10);
    let [newYear, newMonth, newDay] = date.split('-');

    if (newMonth[0] == 0) {
        newMonth = newMonth[1];
    }
    if (newDay[0] == 0) {
        newDay = newDay[1];
    }
    console.log(`${newYear}-${newMonth}-${newDay}`);
}
previousDay(2015, 2, 22)