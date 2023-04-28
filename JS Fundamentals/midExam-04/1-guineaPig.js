function guineaPig(input) {

    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;
    const days = 30;
    const neededCover = weight / 3;

    for (let i = 1; i <= days; i++) {
        food -= 300;
        if (i % 2 == 0) {
            let neededHay = food * 0.05;
            hay -= neededHay;
        }
        if (i % 3 == 0) {
            cover -= neededCover;
        }
    }

    food /= 1000;
    hay /= 1000;
    cover /= 1000;

    if (food > 0 && hay > 0 && cover > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }

}
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])

