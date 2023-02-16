const {expect, assert} = require('chai');
const chooseYourCar = require('../ExamPrep/Exam-22OCT2022/03-chooseCar/chooseYourCar')


describe('chooseYourCar', function() {
    it('check for car', () => {
        assert.throw(chooseYourCar.choosingType('Sedan','blue', 1899), 'Invalid Year!')
        assert.throw(chooseYourCar.choosingType('Sedan','blue', 2023), 'Invalid Year!')
        assert.equal(chooseYourCar.choosingType('coupe','blue', 2020), 'This type of car is not what you are looking for.')
        assert.equal(chooseYourCar.choosingType('Sedan','Blue', 2010), 'This Blue Sedan meets the requirements, that you have.')
        assert.equal(chooseYourCar.choosingType('Sedan','Blue', 2013), 'This Blue Sedan meets the requirements, that you have.')
        assert.equal(chooseYourCar.choosingType('Sedan','blue', 2000), 'This Sedan is too old for you, especially with that Blue color.')
   
    })
    it('check brand name wrong input', () => {
        assert.throw(chooseYourCar.brandName('Sedan', 1), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(1, 1), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(['a', 'b', 'c'], 1), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(['a', 'b', 'c'], '1'), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(1), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(['a', 'b', 'c']), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(['a', 'b', 'c'], -1), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(['a', 'b', 'c'], 5), 'Invalid Information!')
        assert.throw(chooseYourCar.brandName(['a', 'b', 'c'], 1.5), 'Invalid Information!')
        
   
    })

    it('check brand name', () => {
       assert.equal(chooseYourCar.brandName(['a', 'b', 'c'], 1), 'a, c')
       assert.equal(chooseYourCar.brandName(['a', 'b', 'c'], 0), 'b, c')
       assert.equal(chooseYourCar.brandName(['a', 'b', 'c'], 2), 'a, b')
    })

    it('check consum ', () => {
        assert.equal(chooseYourCar.carFuelConsumption(20, 1), 'The car is efficient enough, it burns 5.00 liters/100 km.')
        assert.equal(chooseYourCar.carFuelConsumption(1000, 65), 'The car is efficient enough, it burns 6.50 liters/100 km.')
        assert.equal(chooseYourCar.carFuelConsumption(100, 20), 'The car burns too much fuel - 20.00 liters!')
        assert.equal(chooseYourCar.carFuelConsumption(40, 9), 'The car burns too much fuel - 22.50 liters!')

       
     })

     it('check consum wrong input', () => {
        assert.throw(chooseYourCar.carFuelConsumption('a', 1), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(1, '1'), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(10, -1), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(-5, 10), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(5, 0), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(0, 10), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(), 'Invalid Information!')
        assert.throw(chooseYourCar.carFuelConsumption(1), 'Invalid Information!')
       
     })

})