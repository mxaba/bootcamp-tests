describe("isFromBellville Function", function(){
    it("The fucntion should return true if the car is from is from Bellville", function(){
        assert.equal(true, isFromBellville("CY90345"))
    })
    it("It should return false when a number number plate is not from Bellville or it doesn't start with 'CY'", function(){
        assert.equal(false, isFromBellville("CA0099"))
    })
})
