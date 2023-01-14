function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let volume = lenght * width * height;
    let volumeInLiters = volume / 1000;
    let liters = volumeInLiters - (volumeInLiters * (procent / 100));

    console.log(liters);
}
fishTank(["105 ",

"77 ",

"89 ",

"18.5 "])