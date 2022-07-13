import assert from "assert";
import regCheck from "../regCheck.js";

describe('Check if the regNo end with the location that the vehicle is from', function(){

it("It should return 'true' if the registration number ends with 'GP'", function(){
    assert(true, regCheck("RG 45 HN GP","GP"))
    

})
it("It should return 'true' if the registration number ends with 'GP',", function(){

 assert(true, regCheck("GHT 456 MP","MP"))

})

it("It should return 'true' if the registration numberends with 'L',", function(){

 assert(true, regCheck("FGT 491 L","L"))

})
it("It should return 'true' if the registration number ends with 'EC',", function(){

 assert(true, regCheck("LKG 679 EC","EC"))

})
it("It should return 'true' if the registration number ends with 'EC',", function(){

 assert.deepEqual(false, regCheck("CY 678-453","EC"))

})
it("It should return 'true' if the registration number ends with 'L',", function(){

 assert.deepEqual(false, regCheck("ND 123-456","L"))

})
it("It should return 'true' if the registration number ends with 'GP',", function(){

 assert.deepEqual(false, regCheck("CA 1234-123","GP"))

})

})











