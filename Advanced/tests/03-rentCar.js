const { expect } = require('chai');
const rentCar = require('../ExamPrep/Exam-13March/03. Rent Car/rentCar');

describe('rentCar', function () {
    describe('searchCar', function () {
        it('invalid shop (str)', () => {
            expect(() => {
                rentCar.searchCar('asd', 'a');
            }).to.throw();
        });
        it('invalid shop (num)', () => {
            expect(() => {
                rentCar.searchCar(1, 'a');
            }).to.throw();
        })
        it('find one car', () => {
            const shop = ['a', 'b', 'c'];
            const model = 'a';
            expect(rentCar.searchCar(shop, model)).to.equal('There is 1 car of model a in the catalog!');
        })
        it('find two cars', () => {
            const shop = ['a', 'b', 'a'];
            const model = 'a';
            expect(rentCar.searchCar(shop, model)).to.equal('There is 2 car of model a in the catalog!');
        })

    })

    describe('calculatePriceOfCar', function () {
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('asd', 'a');
            }).to.throw();
        });
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar(1, 'a');
            }).to.throw();
        });
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar(2, 1);
            }).to.throw();
        });
        it('calculate Price for 1 day', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.equal('You choose Volkswagen and it will cost $20!');
        })
        it('calculate Price for 2 days', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal('You choose Volkswagen and it will cost $40!');
        })
        it('not exist model', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Kia', 1);
            }).to.throw();
        });
    })

    describe('checkBudget', function () {
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget('1','1','1');
            }).to.throw();
        });
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget(1,'1','1');
            }).to.throw();
        });
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget('1', 1,1);
            }).to.throw();
        });
        it('budget enough', () => {
            expect(rentCar.checkBudget(1,1,1)).to.equal('You rent a car!');
        })
        it('budget enough', () => {
            expect(rentCar.checkBudget(20, 2, 50)).to.equal('You rent a car!');
        })
        it('budget not enough', () => {
            expect(rentCar.checkBudget(20, 2, 30)).to.equal('You need a bigger budget!');
        })
        
    })

})