const chai = require('chai')
const expect = chai.expect

describe('junit style',() => {
    it('error',()=> {
        expect(1 ===2).to.be.true
    })
})
