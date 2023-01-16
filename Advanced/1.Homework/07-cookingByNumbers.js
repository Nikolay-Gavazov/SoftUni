function cookingByNumbers(...input) {
    let num = Number(input.shift());

    let comands = {
        chop: x => x /= 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x *= 3,
        fillet: x => x *= 0.8
    }

    input.forEach(comand => {
        num = comands[comand](num);
        console.log(num);
    });

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet')
