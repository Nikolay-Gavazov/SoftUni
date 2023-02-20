const {expect, assert} = require('chai');
const findNewApartment = require('../Exam/03-findApartment/findApartment');


describe('findNewApartment', function () {
    it('check location wrong input', () => {
        assert.equal(findNewApartment.isGoodLocation('p', 1), 'Invalid input!')
        assert.equal(findNewApartment.isGoodLocation('p', '1'), 'Invalid input!')
        assert.equal(findNewApartment.isGoodLocation(1, true), 'Invalid input!')
        assert.equal(findNewApartment.isGoodLocation(true, false), 'Invalid input!')
        assert.equal(findNewApartment.isGoodLocation(['p'], true), 'Invalid input!')

    })
    it('check location', () => {
        assert.equal(findNewApartment.isGoodLocation('Burgas', true), 'This location is not suitable for you.')
        assert.equal(findNewApartment.isGoodLocation('Vienna', false), 'This location is not suitable for you.')
        assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.')
        assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!')
        assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), 'You can go on home tour!')
        assert.equal(findNewApartment.isGoodLocation('Plovdiv', false), 'There is no public transport in area.')
        assert.equal(findNewApartment.isGoodLocation('Varna', true), 'You can go on home tour!')
        assert.equal(findNewApartment.isGoodLocation('Varna', false), 'There is no public transport in area.')
    })

    it('check area wrong input', () => {
        assert.equal(findNewApartment.isLargeEnough('p', 1), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough(1, 1), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough(true, 1), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough([], 1), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough([20], '1'), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough([20], ['1']), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough([20], true), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough([20]), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough(1), 'Invalid input!')
        assert.equal(findNewApartment.isLargeEnough(), 'Invalid input!')
    })

    it('check area', () => {
        assert.equal(findNewApartment.isLargeEnough([50, 60, 70, 80], 65), '70, 80')
        assert.equal(findNewApartment.isLargeEnough([50, 60, 70, 80], 40), '50, 60, 70, 80')
        assert.equal(findNewApartment.isLargeEnough([50, 60, 70, 80], 80), '80')
        assert.equal(findNewApartment.isLargeEnough([50, 60, 70, 80], 90), '')
    })

    it('check budged wrong input', () => {
        assert.equal(findNewApartment.isItAffordable(1, '1'), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable(1, true), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable(1, [1]), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable('1', 1), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable(true, 1), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable([1], 1), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable(1), 'Invalid input!')
        assert.equal(findNewApartment.isItAffordable(), 'Invalid input!')

    })

    it('check budged', () => {
        assert.equal(findNewApartment.isItAffordable(1, 1), 'You can afford this home!')
        assert.equal(findNewApartment.isItAffordable(2, 2), 'You can afford this home!')
        assert.equal(findNewApartment.isItAffordable(2, 3), 'You can afford this home!')
        assert.equal(findNewApartment.isItAffordable(2, 1), "You don't have enough money for this house!")
        assert.equal(findNewApartment.isItAffordable(3, 2), "You don't have enough money for this house!")


    })
})