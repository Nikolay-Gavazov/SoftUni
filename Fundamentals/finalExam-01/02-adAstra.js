function solve(input) {

    let text = input.join('')
    let pattern = /([\| \#])(?<food>[A-Za-z]+ *\w*)+\1(?<day>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/gm
    let matches = pattern.exec(text);
    let totalKcal = 0;
    let result = [];


    while (matches) {
        let food = matches.groups['food'];
        let eatBefore = matches.groups['day'];
        let calories = matches.groups['cal'];

        totalKcal += Number(calories);
        class Class {
            constructor(food, eatBefore, calories) {
                this.food = food;
                this.eatBefore = eatBefore;
                this.calories = calories;
            }
        }
        let foodInfo = new Class(food, eatBefore, calories)
        result.push(foodInfo);

        matches = pattern.exec(text);
    }
    let enoughFood = Math.floor(totalKcal / 2000);
    console.log(`You have food to last you for: ${enoughFood} days!`);
    result.forEach(el => {
        console.log(`Item: ${el.food}, Best before: ${el.eatBefore}, Nutrition: ${el.calories}`);
    });

}
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])




//console.log(`Item: ${item}, Best before: ${best}, Nutrition: ${nutrition}`);