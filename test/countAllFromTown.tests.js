import assert from "assert"
import countAllFromTown from "../countAllFromTown.js"

describe ('Check how many registration number is from that town', function(){

it("It should return '3' if the registration is from 	Stellenbosch",function(){

 assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))


})



   it("It should return '0' if there is no registration from Cape Town ",function(){

    var fromCapeTown = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341,CF')

    assert.deepEqual(0, fromCapeTown)
   
   
   })
})