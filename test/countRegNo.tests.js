import assert from "assert"
import countRegNumber from "../countRegNo.js"

describe('count the registration Number of vehicle', function(){

    it ("It should return '3' when it is called by ' CA 182736,CY 523519,CJ 812328'" , function(){

assert.deepEqual(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))

    })

    it ("It should return '2' when it is called by ' CA 42665, AA 12 RT GP'" , function(){

        assert.deepEqual(2, countRegNumber('CA 42665, AA 12 RT GP'))

})

})