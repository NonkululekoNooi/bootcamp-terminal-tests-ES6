import assert from "assert"
import isFromBellville from "../isFromBellville.js"

describe('Checking if the registration number isFromBellville', function(){

it("It should return 'true' if the registration is from Paarl ", function(){

assert.deepEqual(true, isFromBellville('CY 123'))


})

it("It should return 'true' if the registration is from Paarl ", function(){
assert.deepEqual(true, isFromBellville('CY 123 565'))
})

it("It should return 'true' if the registration is from Paarl ", function(){
    assert.deepEqual(false, isFromBellville('CJ 123 565'))
    })

    it("It should return 'true' if the registration is from Paarl ", function(){
        assert.deepEqual(false, isFromBellville('CJ 856 922'))
        })
})