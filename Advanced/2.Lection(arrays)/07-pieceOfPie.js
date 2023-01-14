function pieceOfPie(array, start, end) {

    const startIndex = array.indexOf(start);
    const endIndex = array.indexOf(end);
    
    return array.slice(startIndex, endIndex +1);
    
}
pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')


let isTrue;
    let result = [];

    array.forEach(el => {
        if (el == start || isTrue) {
            result.push(el);
            isTrue = true;
        }
        if (el == end) {
            isTrue = false;
        }

    });