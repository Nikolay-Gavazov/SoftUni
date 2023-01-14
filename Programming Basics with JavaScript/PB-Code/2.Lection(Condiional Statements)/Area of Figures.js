function areaOfFigures(input) {
    let fig = (input[0]);
    let a = Number(input[1]);
    let b = Number(input[2]);
    let c = 0;

    if (fig == 'square') {
        c = (a * a)
        console.log(c.toFixed(3));
    }

    if (fig == 'rectangle') {
        c = (a * b);
        console.log(c.toFixed(3));
    }

    if (fig == 'circle') {
        c = (Math.PI * (a * a));
        console.log(c.toFixed(3));
    }

    if (fig == 'triangle') {
        c = (a * b) / 2
        console.log(c.toFixed(3));
    }

}
areaOfFigures(["triangle", "4.5", "20"])