"use strict";
describe("functional programming", function() {
  it("provide a compact syntax to define a function", function() {
    var square = (function(x) {
      return x + x;
    });
    expect(square(2)).toBe(4);
  });
  it("arrow function, can be used with array methods", function() {
    var array = [1, 2, 3, 4, 5];
    var sum = 0;
    var result = array.forEach((function(n) {
      return sum += n;
    }));
    expect(sum).toBe(15);
    var doubled = array.map((function(n) {
      return n * 2;
    }));
    expect(doubled).toEqual([2, 4, 6, 8, 10]);
  });
  it("lexically binds to 'this'", function(done) {
    var $__0 = this;
    this.name = 'Fahmi';
    setTimeout((function() {
      expect($__0.name).toBe('Fahmi');
      done();
    }), 200);
  });
  it("iterables ", function() {
    var numbers = [1, 2, 3, 4];
    var sum = 0;
    var iterator = numbers.values();
    var next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toBe(10);
  });
  it("for of ", function() {});
});

//# sourceMappingURL=FunctionalProgramming.js.map
