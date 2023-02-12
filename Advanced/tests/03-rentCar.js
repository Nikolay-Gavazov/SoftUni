const {expect} = require('chai');
const rentCar = require('../ExamPrep/Exam-13March/03. Rent Car');

describe('rentCar', function(){
    describe('searchCar', function(){
        it('throw error with invalid input', ()=>{
            expect(rentCar.searchCar('5', 5)).to.throw();
        })
        it('throw error with wrong car', () => {
            expect(rentCar.searchCar([1,2,3], 5)).to.throw();
        })
        
    })

})