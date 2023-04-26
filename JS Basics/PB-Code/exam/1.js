function exam(input) {

    let fat = Number(input[0]);
    let protein = Number(input[1]);
    let carbs = Number(input[2]);
    let calories = Number(input[3]);
    let water = Number(input[4]);

    let gramFat = (calories * (fat / 100)) / 9;
    let gramProtein = (calories * (protein / 100)) / 4;
    let gramCarbs = (calories * (carbs / 100)) / 4;

    let foodWeight = gramFat + gramProtein + gramCarbs;
    let caloriesForGramFood = calories / foodWeight;
    let totalCalories = caloriesForGramFood - (caloriesForGramFood * water / 100);
    
    console.log(totalCalories.toFixed(4));

}