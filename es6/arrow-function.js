//1
function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;

    setInterval(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object (because it's where growUp() is executed.), 
        // which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
    }, 1000);
}

var p = new Person();

//2
function Person() {
    var self = this;
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}

//3
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the Person object
    }, 1000);
}

var p = new Person();

//call and apply, this variable is ignored in arrow function
var adder = {
    base: 1,

    add: function (a) {
        var f = v => v + this.base;//adder.base =1
        return f(a);
    },

    addThruCall: function (a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };

        return f.call(b, a);
    }
};

console.log(adder.add(1));         // This would log 2=1+1
console.log(adder.addThruCall(1)); // This would log 2 still

//no arguments, so its arguments variable is from outerscope
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
    var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
    return f();
}

foo(3); // 6


//shouldnt be used as method call
var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i, this);
    }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}


//cannot be used with new, and dont have prototype
var Foo = () => { };
var foo = new Foo(); // TypeError: Foo is not a constructor
console.log(Foo.prototype); // undefined

