const {expect, assert} = require('chai');
const flowerShop = require('../ExamPrep/Exam-19FEB2022/03. Flowers Shop/flowerShop');

describe('flowerShop', function() {
    it('calc price', () => {
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 1,1), 'You need $1.00 to buy pp!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 2,1), 'You need $2.00 to buy pp!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 2,2), 'You need $4.00 to buy pp!')
    })
    it('cant calc price', () => {
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 'p',1), 'Invalid input!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 'P','1'), 'Invalid input!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', '2','2'), 'Invalid input!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 2,'2'), 'Invalid input!')
        assert.equal(flowerShop.calcPriceOfFlowers('', '',''), 'Invalid input!')
        assert.equal(flowerShop.calcPriceOfFlowers(1, 2,2), 'Invalid input!')
    })

    it('check flowers available', () => {
        assert.equal(flowerShop.checkFlowersAvailable('a',['a', 'b', 'c']), 'The a are available!')
        assert.equal(flowerShop.checkFlowersAvailable('d',['a', 'b', 'c']), 'The d are sold! You need to purchase more!')
    })

    it('sell flowers', () => {
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 1), 'a / c')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 0), 'b / c')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 2), 'a / b')
    })

    it('sell flowers invalid input', () => {
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 4), 'Invalid input!')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], '0'), 'Invalid input!')
        assert.equal(flowerShop.sellFlowers('a', 'b', 'c', 2), 'Invalid input!')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 2], 2), 'Invalid input!')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c']), 'Invalid input!')
    })

})