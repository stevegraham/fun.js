# fun.js

Ruby style functional methods with a side-effect free implmentation.

## About

In Ruby you can do this:

<pre>[1,2,3,4].map { |i| i * i }
=> [1,4,9,16]
</pre>

Recently I started toying around with node.js thought to myself why isn't something like this possible in JS? The everything as top level function feels disorganized to me and what is the need to create arbitrary objects to organize certain functions when they make more sense as object methods?

Well, now you can do similar in JS:

<pre>[1,2,3,4].map(function(i) { return i * i })
=> [1,4,9,16]
</pre>

## Implementation

The implementation is purely functional. Mutability is avoided and recursion is used extensively.

## Why?

For shits and motherfucking giggles my guy.

## Todo

Currently only `Function.prototype.extend` and `Array.prototype.map`, `Array.prototype.each`, `Array.prototype.select`, `Array.prototype.first`, `Array.prototype.last`,  and `Array.prototype.compact` have been implemented. The goal is to provide a similar API to Ruby so to make JS more aesthetically pleasing.
