function oddOccurrences(string) {

    let input = string.toLowerCase().split(' ');

    let obj = {}

    input.forEach(el => {
        if (!obj.hasOwnProperty(el)) {
            obj[el] = 1;
        } else {
            obj[el]++
        }
    });

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let output = [];

    sorted.forEach(el => {
        if (el[1] % 2 !== 0) {
            output.push(el[0]);
        }
    });

    console.log(output.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')