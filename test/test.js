const chai = require('chai')
const expect = chai.expect

describe('error',() => {
    expect(1===1).to.be.true
    expect(1 === 2).to.be.true
})
