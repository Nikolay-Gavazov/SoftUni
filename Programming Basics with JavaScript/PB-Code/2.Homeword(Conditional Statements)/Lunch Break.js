function lunchBreak(input){
    let serial = input[0];
    let durationOfSerial = Number(input[1]);
    let durationOfBreak = Number(input[2]);

    let timeForLunch = durationOfBreak * 1/8;
    let timeForBreak = durationOfBreak * 1/4;
    let restOfBreak = durationOfBreak - timeForLunch - timeForBreak;

    if (restOfBreak >= durationOfSerial){
        let restTime = restOfBreak - durationOfSerial;
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(restTime)} minutes free time.`);
    }else {
        let restTime = durationOfSerial - restOfBreak;
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(restTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"])