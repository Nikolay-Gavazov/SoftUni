class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= this.wines.length) {
            throw Error('Not enough space in the cellar.');
        }
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        for (const wine of this.wines) {
            if (wine.wineName == wineName) {
                if (!wine.paid) {
                    wine.paid = true;
                    this.bill += price;
                    return `You bought a ${wineName} for a ${price}$.`

                } else {
                    throw Error(`${wineName} has already been paid.`);
                }
            }
        }
        throw Error(`${wineName} is not in the cellar.`)
    }

    openBottle(wineName) {
        for (let i = 0; i < this.wines.length; i++) {
            const wine = this.wines[i];
            if (!wine.paid) {
                throw Error(`${wineName} need to be paid before open the bottle.`);
            }
            this.wines.splice(i, 1);
            return `You drank a bottle of ${wineName}.`;
        }
        throw Error("The wine, you're looking for, is not found.");
    }

    cellarRevision(wineType) {
        const result = [];
        if (wineType == undefined) {
            const emptySlots = this.space - this.wines.length;
            result.push(`You have space for ${emptySlots} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (const wine of this.wines) {
                result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
            }
            return result.join('\n');
        }

        const find = this.wines.filter(e => e.wineType == wineType);

        if (find.length > 0) {
            for (const wine of find) {
                result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
            }
            return result.join('\n');
        }
        throw Error(`There is no ${wineType} in the cellar.`);
    }
}

const selection = new WineSelection(5) 

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144); 

selection.payWineBottle('Bodegas Godelia Mencía', 144); 

selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 

selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 

console.log(selection.cellarRevision()); 