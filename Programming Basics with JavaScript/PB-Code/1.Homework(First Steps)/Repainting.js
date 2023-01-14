function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let bags = 0.40;

    let priceForNylon = (nylon + 2) * 1.5 ;
    let priceForPaint = (paint + (paint * 10 / 100)) * 14.5 ;
    let priceForThinner = thinner * 5 ;
    let priceForAllMaterials = priceForNylon + priceForPaint + priceForThinner + bags ;
    let priceForWorkers = (priceForAllMaterials * 30 / 100) * hours;
    let totalPrice = priceForAllMaterials + priceForWorkers ;
    
    console.log(totalPrice);

}
repainting(["5 ",

"10 ",

"10 ",

"1 "])