function solve(arr, firstIndex, secondIndex) {

    if (!Array.isArray(arr)) return NaN;
    if (firstIndex < 0) { firstIndex = 0 };
    let sum = 0;
    const result = arr.splice(firstIndex, secondIndex + 1)
        .forEach(el => {
            sum += Number(el)
        });
    return sum

}
solve([10, 20, 30, 40, 50, 60], 3, 300)
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
solve([10, 'twenty', 30, 40], 0, 2)
solve([], 1, 2)
solve('text', 0, 2)