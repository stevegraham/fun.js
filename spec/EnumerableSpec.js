var obj = {
  method: function(i) { return true }
}

describe("Array", function() {  
  describe(".map", function() {
    it("yields each element of the array into the function, calls it, and returns an array of the results", function() {
      expect([1,2,3,4,5,6,7,8,9,10].map(function(i) { return i * i })).toEqual([1,4,9,16,25,36,49,64,81,100])      
    });
  });

  describe(".each", function() {
    it("yields each element of the array into the function, calls it, and returns itself", function() {
      spyOn(obj, 'method')

      expect([1,2,3].each(function(i) { obj.method(i) })).toEqual([1,2,3])

      expect(obj.method).toHaveBeenCalledWith(1)
      expect(obj.method).toHaveBeenCalledWith(2)
      expect(obj.method).toHaveBeenCalledWith(3)  
    });
  });

  describe(".select", function() {
    it("yields each element of the array into the function, and returns an array of the items where the function returns with a truthy value", function() {
      expect([1,false,3,4,5,false,7,8,false,10].select(function(i) { return i })).toEqual([1,3,4,5,7,8,10])
      expect([false,1,false,3,4,5,false,7,8,false,10].select(function(i) { return i })).toEqual([1,3,4,5,7,8,10])      
    });
  });

  describe(".compact", function() {
    it("returns a new array without any falsy values", function() {
      expect([0,false,1,"",3,4].compact()).toEqual([1,3,4])
    });
  });

  describe(".first", function() {
    describe("with no arguments", function() {
      it("returns the first element of the array", function() {
        expect([0,1,2,3,4].first()).toBe(0)
      });
    })
    describe("with an integer argument", function() {
      it("returns the first n elements of the array", function() {
        expect([0,1,2,3,4].first(3)).toEqual([0,1,2])
      });
    })
  });

  describe(".last", function() {
    it("returns the last element of the array", function() {
      expect([0,1,2,3,4].first()).toBe(0)
    });
  });
});
