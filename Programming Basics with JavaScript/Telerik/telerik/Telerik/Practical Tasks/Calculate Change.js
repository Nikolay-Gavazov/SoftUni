let input = ['1.92', '5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let price = +gets();
let paid = +gets();

let change = (paid - price) * 100;
let coins = [100, 50, 20, 10, 5, 2, 1];
let coins_count = [0, 0, 0, 0, 0, 0, 0];
result_coins = '';

let i = 0;
while (change > 0) {
    if (change - coins[i] >= 0) {
        change = change - coins[i];
        coins_count[i] = coins_count[i] + 1;
    }
    else {
        i = i + 1;
    }
}

for (let i = 0; i < coins_count.length; i++) {
    if (coins_count[i] > 0) {
        if (i == 6) {
            result_coins += coins_count[i] + ' x 1 stotinka\n';
        } else if (i == 0) {
            result_coins += coins_count[i] + ' x 1 lev\n';
        } else {
            result_coins += coins_count[i] + ' x ' + coins[i] + ' stotinki\n';
        }
    }
}
print(result_coins);