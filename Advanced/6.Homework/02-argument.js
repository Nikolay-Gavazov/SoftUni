function argumentInfo() {
    const argument = Array.from(arguments);
    const counters = {};
    argument.forEach(el => {
        console.log(`${typeof el}: ${el}`);
        if (!counters.hasOwnProperty(typeof el)) {
            counters[typeof el] = 0;
        }
        counters[typeof el]++;
    });
    const sorted = Object.entries(counters)
        .sort((a, b) => b[1] - a[1])
        .forEach(el => {
            console.log(`${el[0]} = ${el[1]}`);
        })

}
argumentInfo('cat',4, 42, function () { console.log('Hello world!'); })
module.exports = argumentInfo;