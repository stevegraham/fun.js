var Enumerable = function() {
  this.map = function(func, i, m) { 
    var idx = i || 0
    var mem = m || []
    if(this.length != idx) {
      // call func with element at current index, create new array that is the return value of 
      // the function + mem, and then recurse with index + 1
      return this.map(func, idx+1, mem.concat(func(this[idx])))
    } else {
      // return the result if this is the last element of the array.
      return mem
    }
  }

  this.each = function(func,i) {
    var idx = i || 0
    if(this.length != idx) {
      // call function with element at current index
      func(this[idx])
      // recurse with next element
      this.each(func, idx+1)
    }
    // return self
    return this
  }

  this.select = function(func, i, m) { 
    var idx = i || 0
    var mem = m || []
    if(this.length != idx) {
      if(func(this[idx]) != false) {
        // recurse with element at next index
        return this.select(func, idx+1, mem)
      } else if(idx==0) {
        // this is the first element of the array and it has a falsy value. copy array without this element, and recurse.
        return this.slice(1,this.length+1).select(func)
      } else {
        // this is an element with a falsy value. copy array without current element, and recurse
        var arr    = mem.length == 0 ? this : mem
        var offset = this.length - mem.length
        return this.select(func, idx+1, arr.slice(0,idx-offset).concat(arr.slice(idx+1-offset,arr.length)))
      }
    } else {
      // return the result if this is the last element of the array.
      return mem
    }
  }

  this.first = function(end) { 
    if(typeof(end) != 'number') {
      return this[0]
    } else {
      return this.slice(0,end)
    }
  }

  this.last = function() { 
    return this[this.length-1]
  }

  this.compact = function(func,i) {
    return this.select(function(i) { return i })
  }
};

Function.prototype.extend = function(module) {
  module.apply(this.prototype)
}

Array.extend(Enumerable)