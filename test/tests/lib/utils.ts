import * as chai from 'chai'
import * as utils from 'lib/utils'

describe('Token method', async () => {
    it('should generate a token', () => {
        chai.expect(utils.token(0)).to.have.lengthOf(0)
        chai.expect(utils.token(1)).to.have.lengthOf(1)
        chai.expect(utils.token(9)).to.have.lengthOf(9)
        chai.expect(utils.token(32)).to.have.lengthOf(32)
        chai.expect(utils.token(64)).to.have.lengthOf(64)
        chai.expect(utils.token(199)).to.have.lengthOf(199)
    })
})
