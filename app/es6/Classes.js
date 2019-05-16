describe("define class", function(){
	it("class", function() {
    class Employee {
      doWork() {
        return 'complete';
      }
    }

    var e = new Employee()

    expect(e.doWork()).toBe('complete');
    expect(Employee.prototype.doWork.call(e)).toBe('complete');
  });

  it("can have constructor", function() {
    class Employee {
      constructor(name) {
        this._name = name;
      }

      doWork() {
        return this._name;
      }
    }

    var e = new Employee('doing')

    expect(e.doWork()).toBe('doing');
  });

  it("can have getter and setter", function() {
    class Employee {
      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue) {
        this._name = newValue;
      }
    }

    var e1 = new Employee('fahmi')
    var e2 = new Employee('idris')

    expect(e1.name).toBe('fahmi');
    expect(e2.name).toBe('idris');

    e1.name = 'fahim';
    expect(e1.name).toBe('fahim');
  });

  it("inheritance", function() {
    class Person {
      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue) {
        if(newValue){
          this._name = newValue;
        }
      }
    }

    class Employee extends Person {
      doWork() {
        return `${this._name} is working`;
      }
    }

    var p1 = new Person('Scoot');
    // var e1 = new Employee('Idris');

    expect(p1.name).toBe('Scoot');
    // expect(e1.name).toBe('Idris');
    // expect(e1.doWork()).toBe('Idris is working');
  });

  it("super", function() {
    class Person {
      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }
    }

    class Employee extends Person {
      constructor(title, name) {
        super(name);
        this._title = title;
      }
      get title() {
        return this._title;
      }
    }

    // var e = new Employee('Engineer', 'Fahmi');
    // expect(e.name).toBe('Fahmi');
    // expect(e.title).toBe('Engineer');
  });
});