let input = ['2', '18', '13.50'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
for (let i = 0; i < N; i++) {
    discount = Math.round(Number(gets()) * 35) / 100;
    print(discount.toFixed(2));
}

//Number(Math.round(100 - (price / listprice) * 100 + 'e2') + 'e-2').toFixed(2);

// var discount = Math.round((100 - (price / listprice) * 100) * 100) / 100;
