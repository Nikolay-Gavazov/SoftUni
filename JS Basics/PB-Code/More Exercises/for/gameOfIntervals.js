function gameOfIntervals(input) {
    let n = Number(input[0]);

    let num = 0;

    let points = 0;

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;

    for(let i = 1; i <= n; i++){
        num = Number(input[i]);
        if(num >= 0 && num < 10){
            a++;
            points += num * 0.2; 
        }else if(num >= 10 && num < 20){
            b++;
            points += num * 0.3;
        }else if(num >= 20 && num < 30){
            c++;
            points += num * 0.4;
        }else if(num >= 30 && num < 40){
            d++;
            points += 50;
        }else if(num >= 40 && num < 51){
            e++;
            points += 100;
        }else{
            f++;
            points /= 2;
        }
    }

    let avgA = (a / n) * 100;
    let avgB = (b / n) * 100;
    let avgC = (c / n) * 100;
    let avgD = (d / n) * 100;
    let avgE = (e / n) * 100;
    let avgF = (f / n) * 100;

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${avgA.toFixed(2)}%`);
    console.log(`From 10 to 19: ${avgB.toFixed(2)}%`);
    console.log(`From 20 to 29: ${avgC.toFixed(2)}%`);
    console.log(`From 30 to 39: ${avgD.toFixed(2)}%`);
    console.log(`From 40 to 50: ${avgE.toFixed(2)}%`);
    console.log(`Invalid numbers: ${avgF.toFixed(2)}%`);
}