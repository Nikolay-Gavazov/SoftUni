function nextDay(year, mount, day) {

    let nextDay = Number(day) + 1;

    switch (mount) {

        case 1:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 2;
            }
            break;
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                if (nextDay > 29) {
                    nextDay = 1;
                    mount = 3;
                }
            }else{
                nextDay = 1;
                mount = 3;
            }
            break;
        case 3:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 4;
            }
            break;
        case 4:
            if (nextDay > 30) {
                nextDay = 1;
                mount = 5;
            }
            break;
        case 5:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 6;
            }
            break;
        case 6:
            if (nextDay > 30) {
                nextDay = 1;
                mount = 7;
            }
            break;
        case 7:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 8;
            }
            break;
        case 8:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 9;
            }
            break;
        case 9:
            if (nextDay > 30) {
                nextDay = 1;
                mount = 10;
            }
            break;
        case 10:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 11;
            }
            break;
        case 11:
            if (nextDay > 30) {
                nextDay = 1;
                mount = 12;
            }
            break;
        case 12:
            if (nextDay > 31) {
                nextDay = 1;
                mount = 1;
                year++;
            }
            break;

    }
    if(year < 1900){
        year = 1900 + year
    }

    console.log(`${year}-${mount}-${nextDay}`);

}
nextDay(1,1,1)