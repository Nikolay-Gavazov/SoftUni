const {expect} = require('chai');
const isOddOrEven = require('../7.Homework/02-oddOrEven');

describe('isOdd or isEven', function(){
    it('return undefined if input is not string', () =>{
        expect(isOddOrEven(123)).to.be.undefined;
    })
    it('return even', ()=>{
        expect(isOddOrEven('asdf')).to.equal('even');
    })
    it('return odd', ()=>{
        expect(isOddOrEven('asd')).to.equal('odd');
    })

})