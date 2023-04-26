function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let totalTime = a + b + c;

    let mins = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {

        console.log(`${mins}:0${seconds}`);
    }else {
        console.log(`${mins}:${seconds}`);
    }

}
sumSeconds(["35",

"45",

"44"])
