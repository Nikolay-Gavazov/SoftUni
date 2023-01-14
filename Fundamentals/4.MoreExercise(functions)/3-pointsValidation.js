function pointsValidation(...input) {
    const x1 = Number(input.shift());
    const y1 = Number(input.shift());
    const x2 = Number(input.shift());
    const y2 = Number(input.shift());

    let result = Math.sqrt((Math.pow((0 - x1), 2)) + (Math.pow((0 - y1), 2)));
    if (Math.floor(result) == result) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let result2 = Math.sqrt((Math.pow((x2 - 0), 2)) + (Math.pow((y2 - 0), 2)));
    if (Math.floor(result2) == result2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let result3 = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
    if (Math.floor(result3) == result3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


}
pointsValidation([2, 1, 1, 1])