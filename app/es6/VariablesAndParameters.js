describe("how let work", function(){
	it("will provide block scoping, unlike var", function() {
    var doWork = function(flag){
      if (flag) {
        let x = 3;
        return x;
      }
    };
    var result = doWork(true);
		expect(result).toBe(3);
  });

  it("will provide block scoping with for", function() {
    var doWork = function(flag){
      for (var i = 0; i < 10; i++) {

      };
      return i;
    };
    var result = doWork();
		expect(result).toBe(10);
	});
});

describe("using const", function(){
	it("will make variable readonly", function() {
    const MAX = 10;
		expect(MAX).toBe(10);
  });

  it("will provide block scoping with for", function() {
    const x = 12;
    var doWork = function(flag){
      let x = 10;
      return x;
    };
    var result = doWork();
    expect(result).toBe(10);
    expect(x).toBe(12);
	});
});

describe("desctructuring", function(){
	it("can destrucure array", function() {
    let [, x, y, z] = [1, 3, 2];
    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });

  it("can destrucure objects", function() {
    let { firstName, lastName } = {
      firstName: "Fahmi",
      lastName: "Idris"
    };
    expect(firstName).toBe('Fahmi');
    expect(lastName).toBe('Idris');
  });
});

describe("default parameters", function(){
	it("provide defaults", function() {
    var doWork = function(name = 'Fahmi') {
      return name;
    }
    var result = doWork();
    expect(result).toBe('Fahmi');
  });
});

describe("rest parameters", function(){
	it("is like varargs", function() {
    var doWork = function(...numbers) {
      let result = 0;
      numbers.forEach(function(n) {
        result += n;
      })
      return result;
    }
    // var result = doWork(1,2,3);
    // expect(doWork()).toBe(6);
  });
});

describe("sphread", function(){
	it("can build arrays", function() {
    var a = [4,5];
    var b = [1,2,3, ...a];
    expect(b).toEqual([1,2,3,4,5]);
  });
});

describe("templates", function(){
	it("can combine data", function() {
    var doWork = function(name) {
      return `hello ${name}`;
    }
    var result = doWork('fahmi')
    expect(result).toBe('hello fahmi');
  });
});