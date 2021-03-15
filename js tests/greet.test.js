describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);
        assert.deepEqual([2,2],[2,2]);
    });
});

describe('Greet Function', function(){
    it("The function should return the string that is passed", function(){
        assert.equal("Hello, Mcebo", greet("Mcebo"))
    })
    it("When a number is passed or the argument passed is not a string, it should return false", function(){
        assert.equal(false, greet(45))
    })
})
