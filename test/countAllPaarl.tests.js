import assert from "assert"
import countAllPaarl from "../countAllPaarl.js"

describe('Regiration Numbers from Paarl', function(){

it("It should return '1' if it is called by ', CL 123-546, CK 345, CJ 123')'",function(){

    assert.equal(countAllPaarl('CJ 123') , 1)

})

it("It should return '0' if it is called by ' CL 123-546, CK 345')'",function(){
    assert.equal(countAllPaarl('CL 123-546, CK 345') , 0)
})

it("It should return '1' if it is called by ' CJ 123 252')'",function(){
    assert.equal(countAllPaarl('CJ 123 252') , 1)
})

})

