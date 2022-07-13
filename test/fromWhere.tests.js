import assert from "assert"
import fromWhere from "../fromWhere.js"


describe('Checking the registration number is from where', function(){


it("It should return 'Bellville' if the registration number is from Bellville", function(){
assert.equal(fromWhere('CY 555'), 'Bellville')

})

it("It should return 'Paarl' if the registration number is from Paarl ", function(){
    assert.equal(fromWhere('CJ 555'), 'Paarl')
    
    })

    it("It should return 'Some other place!' if the regitration number is from Parow", function(){
        assert.equal(fromWhere('CC 555'), 'Some other place!')
        
        })

        it("It should return 'Some other place' if the registration number is from Cape Town", function(){
            assert.equal(fromWhere('CA 555'), 'Cape Town')
            
            })
})