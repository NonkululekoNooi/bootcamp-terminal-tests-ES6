import assert from "assert"
import totalPhoneBill from "../totalPhoneBill.js"


describe('Calculating the total bill for the data provided', function(){

it("It should return 'R7.45' when it is called by the total bill",function(){


assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
    
})

it("It should return 'R1.30' when it is called by the total bill",function(){


    assert.equal('R1.30', totalPhoneBill(' sms, sms'))
        
    })

    it("It should return 'R5.50' when it is called by the total bill",function(){


        assert.equal('R5.50', totalPhoneBill(' call, call'))
            
        })


        it("It should return 'R6.15' when it is called by the total bill",function(){


            assert.equal('R6.15', totalPhoneBill(' call, call, sms'))
                
            })
    
})