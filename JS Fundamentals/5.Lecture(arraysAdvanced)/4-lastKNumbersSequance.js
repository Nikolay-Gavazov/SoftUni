function lastNumberSequance(n, k) {

    let result = [1];
    let elements = [];

    for (let i = 1; i < n; i++) {
        let index = Math.max(result.length - k, 0);
        elements = result.slice(index);
        let sum = 0;

        for (let element of elements) {
            sum += element
        }
        result.push(sum);
    }


    console.log(result.join(' '));
}
lastNumberSequance(6, 3)