const {expect} = require('chai');
const argumentInfo = require('../6.Homework/02-argument');

describe('argumentInfo', ()=>{
    it('isString', ()=>{
        expect(argumentInfo('a')).to.be.undefined
    })
})