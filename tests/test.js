const chai = require('chai')
const expect = chai.expect

describe('junit style',() => {
    it('do right',()=> {
        expect(1 === 1).to.be.true
    })
})
