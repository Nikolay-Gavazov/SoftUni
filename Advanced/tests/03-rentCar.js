const {expect} = require('chai');
const rentCar = require('../ExamPrep/rentCar');

describe('rentCar', function(){
    describe('searchCar', function(){
        it('find one car', ()=>{
            const shop = ['a','b','c'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);
            expect(rentCar.searchCar(shop, model)).to.equal('There is 1 car of model a in the catalog!');
        })
        it('find two cars', ()=>{
            const shop = ['a','b','a'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);
            expect(rentCar.searchCar(shop, model)).to.equal('There is 2 car of model a in the catalog!');
        })
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
        
    })

})