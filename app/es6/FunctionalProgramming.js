describe("functional programming", function(){
	it("provide a compact syntax to define a function", function() {
    let square = (x) => x + x;
		expect(square(2)).toBe(4);
  });

  it("arrow function, can be used with array methods", function() {
    let array = [1,2,3,4,5];
    let sum = 0;
    let result = array.forEach(n => sum += n);
    expect(sum).toBe(15);
    
    let doubled = array.map(n => n * 2);
		expect(doubled).toEqual([2,4,6,8,10]);
  });

  it("lexically binds to 'this'", function(done) {
    this.name = 'Fahmi';
    setTimeout(() => {
      expect(this.name).toBe('Fahmi');
      done();
    }, 200)
  });

  it("iterables ", function() {
    let numbers = [1,2,3,4];
    let sum = 0;
  
    let iterator = numbers.values();
    let next = iterator.next();

    while(!next.done) {
      sum += next.value;
      next = iterator.next();
    }

    expect(sum).toBe(10);
  });

  it("for of ", function() {
    // let arr = [1,2,3,4];
    // let sum = 0;
    // for (let n of arr) {
    //   sum += n;
    // }

    // expect(sum).toBe(10);
  });
});