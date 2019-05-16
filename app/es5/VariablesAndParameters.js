"use strict";
describe("how let work", function() {
  it("will provide block scoping, unlike var", function() {
    var doWork = function(flag) {
      if (flag) {
        try {
          throw undefined;
        } catch (x) {
          x = 3;
          return x;
        }
      }
    };
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it("will provide block scoping with for", function() {
    var doWork = function(flag) {
      for (var i = 0; i < 10; i++) {}
      ;
      return i;
    };
    var result = doWork();
    expect(result).toBe(10);
  });
});
describe("using const", function() {
  it("will make variable readonly", function() {
    var MAX = 10;
    expect(MAX).toBe(10);
  });
  it("will provide block scoping with for", function() {
    var x = 12;
    var doWork = function(flag) {
      var x = 10;
      return x;
    };
    var result = doWork();
    expect(result).toBe(10);
    expect(x).toBe(12);
  });
});
describe("desctructuring", function() {
  it("can destrucure array", function() {
    var $__1 = [1, 3, 2],
        x = $__1[1],
        y = $__1[2],
        z = $__1[3];
    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });
  it("can destrucure objects", function() {
    var $__1 = {
      firstName: "Fahmi",
      lastName: "Idris"
    },
        firstName = $__1.firstName,
        lastName = $__1.lastName;
    expect(firstName).toBe('Fahmi');
    expect(lastName).toBe('Idris');
  });
});
describe("default parameters", function() {
  it("provide defaults", function() {
    var doWork = function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'Fahmi';
      return name;
    };
    var result = doWork();
    expect(result).toBe('Fahmi');
  });
});
describe("rest parameters", function() {
  it("is like varargs", function() {
    var doWork = function() {
      for (var numbers = [],
          $__0 = 0; $__0 < arguments.length; $__0++)
        $traceurRuntime.setProperty(numbers, $__0, arguments[$traceurRuntime.toProperty($__0)]);
      var result = 0;
      numbers.forEach(function(n) {
        result += n;
      });
      return result;
    };
  });
});
describe("sphread", function() {
  it("can build arrays", function() {
    var a = [4, 5];
    var b = $traceurRuntime.spread([1, 2, 3], a);
    expect(b).toEqual([1, 2, 3, 4, 5]);
  });
});
describe("templates", function() {
  it("can combine data", function() {
    var doWork = function(name) {
      return ("hello " + name);
    };
    var result = doWork('fahmi');
    expect(result).toBe('hello fahmi');
  });
});

//# sourceMappingURL=VariablesAndParameters.js.map
