const {expect, assert} = require('chai');
const carService = require('../ExamPrep/Exam-25JUN2022/03-carService/03. Car Service_Resources');

describe('carService', function () {
    it('check issue', () => {
        assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money')
        assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money')
        assert.equal(carService.isItExpensive('Turbo'), 'The overall price will be a bit cheaper')
    })

    it('check discount wrong input', () => {
        assert.equal(carService.discount(), 'Invalid input')
        assert.equal(carService.discount('1', 1), 'Invalid input')
        assert.equal(carService.discount(1, '1'), 'Invalid input')
        assert.equal(carService.discount(['1'], 1), 'Invalid input')

    })
    it('check discount', () => {
        assert.equal(carService.discount(1, 1), 'You cannot apply a discount')
        assert.equal(carService.discount(3, 100), 'Discount applied! You saved 15$')
        assert.equal(carService.discount(8, 100), 'Discount applied! You saved 30$')

    })

    it('check parts to buy wrong input', () => {
        assert.equal(carService.partsToBuy(1, 1), 'Invalid input')
        assert.equal(carService.partsToBuy(['a'], 1), 'Invalid input')
        assert.equal(carService.partsToBuy(1, ['a']), 'Invalid input')
        assert.equal(carService.partsToBuy('1', '1'), 'Invalid input')
        assert.equal(carService.partsToBuy(['1'], '1'), 'Invalid input')
        assert.equal(carService.partsToBuy('1', ['1']), 'Invalid input')
        assert.equal(carService.partsToBuy(['1']), 'Invalid input')
        assert.equal(carService.partsToBuy(), 'Invalid input')

    })

    it('check parts to buy', () => {
        assert.equal(carService.partsToBuy([{ part: 'a', price: 1 }, { part: 'b', price: 1 }, { part: 'c', price: 1 }], ['a']), '1')
        assert.equal(carService.partsToBuy([{ part: 'a', price: 1 }, { part: 'b', price: 1 }, { part: 'c', price: 1 }], ['a', 'b']), '2')
        assert.equal(carService.partsToBuy([{ part: 'a', price: 1 }, { part: 'b', price: 1 }, { part: 'c', price: 1 }], ['a', 'b', 'c']), '3')
        assert.equal(carService.partsToBuy([], ['a']), '0')

    })

})