function bonusScore(input) {
    let score = Number(input[0]);
    let bonus = 0;

    
    if (score <= 100 && score % 2 === 0) {
        bonus = 6;
        console.log(bonus);
        console.log(score + bonus);

    }else if (score <= 100 && score % 10 === 5){
        bonus = 7;   
        console.log(bonus);
        console.log(score + bonus);
    }else if (score <= 100) {
        bonus = 5;
        console.log(bonus);
        console.log(score + bonus);
    }else if (score > 100 && score <= 1000 && score % 2 === 0){
        bonus = (score * 0.2) + 1;
        console.log(bonus);
        console.log(score + bonus);
    }else if (score > 100 && score <= 1000 && score % 10 === 5){
        bonus = (score * 0.2) + 2;
        console.log(bonus);
        console.log(score + bonus);
    }else if (score > 100 && score <= 1000) {
        bonus = (score * 0.2);
        console.log(bonus);
        console.log(score + bonus);
    }
    else if (score > 1000 && score % 2 === 0) {
        bonus = (score * 0.1) + 1;
        console.log(bonus);
        console.log(score + bonus);

    }else if (score > 1000 && score % 10 === 5) {
        bonus = (score * 0.1) + 2;
        console.log(bonus);
        console.log(score + bonus);
    }else if (score > 1000) {
        bonus = (score * 0.1);
        console.log(bonus);
        console.log(score + bonus);
    }

}
bonusScore(["17"])
