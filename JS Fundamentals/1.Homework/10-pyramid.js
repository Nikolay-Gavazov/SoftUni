function pyramid(base, increment) {

    let height = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (let i = base; i >= 1; i -= 2) {
        height++
        if (i % 2 == 0 && i - 2 == 0) {
            gold += (i * i) * increment;
        } else if (i - 1 == 0) {
            gold = i * increment;
        } else {
            let currentStone = (i - 2) * (i - 2);
            stone += currentStone * increment;
            let currentMarble = (2 * i) + 2 * (i - 2);
            if (height % 5 == 0) {
                lapis += currentMarble * increment;
            } else {
                marble += currentMarble * increment;
            }

        }

    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
pyramid(11, 1)