"use strict";
describe("define class", function() {
  it("class", function() {
    var Employee = function Employee() {};
    ($traceurRuntime.createClass)(Employee, {doWork: function() {
        return 'complete';
      }}, {});
    var e = new Employee();
    expect(e.doWork()).toBe('complete');
    expect(Employee.prototype.doWork.call(e)).toBe('complete');
  });
  it("can have constructor", function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {doWork: function() {
        return this._name;
      }}, {});
    var e = new Employee('doing');
    expect(e.doWork()).toBe('doing');
  });
  it("can have getter and setter", function() {
    var Employee = function Employee(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Employee, {
      get name() {
        return this._name;
      },
      set name(newValue) {
        this._name = newValue;
      }
    }, {});
    var e1 = new Employee('fahmi');
    var e2 = new Employee('idris');
    expect(e1.name).toBe('fahmi');
    expect(e2.name).toBe('idris');
    e1.name = 'fahim';
    expect(e1.name).toBe('fahim');
  });
  it("inheritance", function() {
    var Person = function Person(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Person, {
      get name() {
        return this._name;
      },
      set name(newValue) {
        if (newValue) {
          this._name = newValue;
        }
      }
    }, {});
    var Employee = function Employee() {
      $traceurRuntime.defaultSuperCall(this, $Employee.prototype, arguments);
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {doWork: function() {
        return (this._name + " is working");
      }}, {}, Person);
    var p1 = new Person('Scoot');
    expect(p1.name).toBe('Scoot');
  });
  it("super", function() {
    var Person = function Person(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Person, {get name() {
        return this._name;
      }}, {});
    var Employee = function Employee(title, name) {
      $traceurRuntime.superCall(this, $Employee.prototype, "constructor", [name]);
      this._title = title;
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {get title() {
        return this._title;
      }}, {}, Person);
  });
});

//# sourceMappingURL=Classes.js.map
