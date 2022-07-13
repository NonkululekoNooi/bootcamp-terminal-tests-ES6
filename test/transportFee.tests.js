import assert from "assert"
import transportFee from "../transportFee.js"


describe('Checking the prices of the shifts', function(){

it("It should return 'R20' when it is called by morning shift", function(){

assert.equal(transportFee('morning'), 'R20')

})

it("It should return 'free' when it is called by night shift", function(){

    assert.equal(transportFee('night'), 'free')
    
    })

    it("It should return 'R10' when it is called by afternoon shift", function(){

        assert.equal(transportFee('afternoon'), 'R10')
        
        })
})