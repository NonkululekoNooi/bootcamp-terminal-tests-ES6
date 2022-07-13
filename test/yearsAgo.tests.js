import assert from "assert"
import yearAgo from "../yearsAgo.js"

describe( 'Checking the year ago from 2022', function(){

it ("It should return 'years' if the year ago is 1994",function(){

    
    assert.equal((new Date().getFullYear() - 1994), 28)
   

})
it ("It should return 'years' if the year ago is 2000",function(){

assert.equal((new Date().getFullYear() - 2000), 22);

})

it ("It should return 'years' if the year ago is 1968",function(){

    assert.equal((new Date().getFullYear() - 1968), 54);
    
    })
    it ("It should return 'years' if the year ago is 1952",function(){

        assert.equal((new Date().getFullYear() - 1952), 70);
        
        })
})