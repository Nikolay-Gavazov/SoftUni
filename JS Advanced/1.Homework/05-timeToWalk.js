function timeToWalk(steps, length, speed) {
    const distance = steps * length;
    const brake = Math.floor(distance / 500);
    const metersProSecond = (speed / 3600) * 1000;

    let mins = Math.floor((distance / metersProSecond) / 60 + brake)
    let seconds = Math.ceil((distance / metersProSecond) % 60);
    let hours = Math.floor((distance / metersProSecond) / 3600);

    if (mins > 59) {
        mins = mins - 60;
        hours++;
    }
    let resHours = hours < 10 ? `0${hours}` : hours;
    let resMins = mins < 10 ? `0${mins}` : mins;
    let resSeconds = seconds < 10 ? `0${seconds}` : seconds;

    console.log(`${resHours}:${resMins}:${resSeconds}`);
}
timeToWalk(2564, 0.70, 5.5)