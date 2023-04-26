const lookupChar = require("../7.Homework/03-charLookup");

const {expect} = require('chai');

describe('lookupChar', function(){
    it('return undefined with wrong input', ()=>{
        expect(lookupChar(124, '23')).to.be.undefined
    })
    it('return undefined with wrong input', ()=>{
        expect(lookupChar('asd', 5.1)).to.be.undefined
    })
    it('return undefined with wrong input', ()=>{
        expect(lookupChar(124, 3)).to.be.undefined
    })
    it('return undefined with wrong input', ()=>{
        expect(lookupChar('124', '23')).to.be.undefined
    })
    it('incorrect index', ()=>{
        expect(lookupChar('Hello', -1)).to.equal('Incorrect index');
    })
    it('incorrect index', ()=>{
        expect(lookupChar('Hello', 5)).to.equal('Incorrect index');
    })
    it('correct index', ()=>{
        expect(lookupChar('Hello', 4)).to.equal('o');
    })
})