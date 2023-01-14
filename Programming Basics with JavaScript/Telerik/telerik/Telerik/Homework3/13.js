let n = [4, 3, 2, 8, 3, 1];
let product1 = 1;
let product2 = 1;
for (let i = 0; i < n.length; i++) {
    if (i % 2 == 0){
        product1 = product1 * n[i]   
    }if (i % 2 !== 0){
        product2 = product2 * n[i]
    }
}


if (product1 === product2){
    console.log(`product = ${product1} result: yes` );
}else

console.log(`add_product = ${product1}
even_product = ${product2} 
result: no`);
