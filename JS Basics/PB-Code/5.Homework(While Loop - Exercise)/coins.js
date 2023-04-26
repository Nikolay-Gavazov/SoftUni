function coins(input) {
    let coins = Number(input[0]);

    coins *= 100;
    let coinCounter = 0;

    while (coins > 0) {
        
        if(coins >= 200){
            coins -= 200;
            coinCounter++;
        }else if(coins >= 100){
            coins -= 100;
            coinCounter++;
        }else if(coins >= 50){
            coins -= 50;
            coinCounter++;
        }else if(coins >= 20){
            coins -= 20;
            coinCounter++;
        }else if(coins >= 10){
            coins -= 10;
            coinCounter++;
        }else if(coins >= 5){
            coins -= 5;
            coinCounter++;
        }else if(coins >= 2){
            coins -= 2;
            coinCounter++;
        }else if(coins >= 1){
            coins -= 1;
            coinCounter++;
        }else{
            break;
        }
    }
    console.log(coinCounter);
}
coins(["0.56"])