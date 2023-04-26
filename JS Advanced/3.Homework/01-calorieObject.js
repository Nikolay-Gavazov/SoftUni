function calorieObject(array) {

    const result = {};

    for (let i = 0; i < array.length; i += 2) {
        let product = array[i];
        let cal = Number(array[i + 1]);
        result[product] = cal;
    }

    console.log(result);

}
calorieObject(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])