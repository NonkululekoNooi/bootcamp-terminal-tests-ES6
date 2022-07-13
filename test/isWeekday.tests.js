import  assert from "assert"
import isWeekday from "../isWeekday.js"


describe('Checking the days of the week are in the weekdays or weekends',function(){

it("It should return ' true' if the weekday is 'Monday'",function(){

    assert.equal( true, isWeekday('Monday') )
})

it("It should return ' true' if the weekday is 'Tuesday'",function(){

    assert.deepEqual( true, isWeekday('Tuesday') )
})

it("It should return ' true' if the weekday is 'Wednesday'",function(){

    assert.deepEqual( true, isWeekday('Wednesday') )
})

it("It should return ' true' if the weekday is 'Thursday'",function(){

    assert.deepEqual( true, isWeekday('Thursday') )
})

it("It should return ' true' if the weekday is 'Friday'",function(){

    assert.deepEqual( true, isWeekday('Friday') )
})

it("It should return ' false' if the weekday is'Saturday'",function(){

    assert.deepEqual( false, isWeekday('Saturday') )
})

it("It should return ' false' if the weekday is'Sunday'",function(){

    assert.deepEqual( false, isWeekday('Sunday') )
})
})