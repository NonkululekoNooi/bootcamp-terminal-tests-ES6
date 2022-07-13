import assert from "assert"
import greet from "../greet.js"

describe('Test my greet function ' , function() {
    it(" It should return 'Hello, Nkulie' if the name is 'Nkulie' " , function(){
        assert.equal("Hello, Nkulie" , greet("Nkulie") , "this should be true")

        
    });

    it(" It should return 'Hello, Shelly' if the name is 'Shelly' " , function(){

    assert.deepEqual("Hello, Shelly", greet("Shelly"), "this should be true")
});

it(" It should return 'Hello, Aviwe' if the name is 'Aviwe' " , function(){

    assert.deepEqual("Hello, Aviwe", greet("Aviwe"), "this should be true")
});

});