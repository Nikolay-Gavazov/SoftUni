function bills(input) {
    let n = Number(input[0]);

    let electricity = 0;
    let electricityBills = 0;
    let water = 20;
    let waterBills = water * n;
    let internet = 15;
    let internetBills = internet * n;
    let otherBills = 0;
    for(let i = 1; i <= n; i++){
        electricity = Number(input[i]);
        let other = (electricity + water + internet) * 1.2;
        otherBills += other;
        electricityBills += electricity;
    }

    let avg = (electricityBills + waterBills + internetBills + otherBills) / n;

    console.log(`Electricity: ${electricityBills.toFixed(2)} lv`);
    console.log(`Water: ${waterBills.toFixed(2)} lv`);
    console.log(`Internet: ${internetBills.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ])