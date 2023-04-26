const {expect} = require('chai');
const isSymmetric = require('../7.Lecture(tests)/05-checkSymmetry');

describe('Symmetric check', function(){
    it('return true for symmetric', () =>{
        const arr = [2,3,3,2];
        expect(isSymmetric(arr)).to.be.true;
    })
    it('return true when length is odd', () =>{
        const arr = [1,2,1];
        expect(isSymmetric(arr)).to.be.true;
    })
    it('work with array with numbers as strings', ()=>{
        const arr = ['1','2','2','1'];
        expect(isSymmetric(arr)).to.be.true;
    })
    it('return false for non-symmetric', () =>{
        const arr = [1,2,3];
        expect(isSymmetric(arr)).to.be.false;
    })
    it('false with non-array', () =>{
        const arr = 44332;
        expect(isSymmetric(arr)).to.be.false;
    })
    it('return false for mix array', ()=>{
        const arr = ['1',2,2,1];
        expect(isSymmetric(arr)).to.be.false;
    })
    it('work with array of strings', ()=>{
        const arr = ['a','b','b','a'];
        expect(isSymmetric(arr)).to.be.true;
    })
    })