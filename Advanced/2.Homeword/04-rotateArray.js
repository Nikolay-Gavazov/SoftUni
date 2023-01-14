function rotateArray(array, n) {
    for (let i = 0; i < n; i++) {
        let currentEl = array.pop();
        array.unshift(currentEl);
    }
    console.log(array.join(' '));
}
rotateArray(['1',

'2',

'3',

'4'],

2)