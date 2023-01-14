function fancyBarcodes(input) {
    const pattern = /([@]+[#]+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])([@]*[#]*)/gm;
    const numPattern = /[0-9]+/gm
    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let match = input[i].match(pattern);
        if (match) {
            let digit = match[0].match(numPattern);

            if (digit) {
                let group = '';
                for (let el of digit) {
                    group += el;
                }
                console.log(`Product group: ${group}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode');
        }
    }

}
fancyBarcodes(["6", 

"@###Val1d1teM@###", 

"@#ValidIteM@#", 

"##InvaliDiteM##", 

"@InvalidIteM@", 

"@#Invalid_IteM@#", 

"@#ValiditeM@#"])