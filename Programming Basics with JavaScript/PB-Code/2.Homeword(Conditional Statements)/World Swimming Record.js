function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = distance * timeForMeter + delay;
    

    if (totalTime >= record){
        let timeNeeded = totalTime - record;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}
worldSwimmingRecord(["55555.67",

"3017","5.03"])