
//**************** default parameters*******************************/
function f(x, y = 7, z = 42) { return x + y + z }
f(1) === 50


/********************** rest and spread************************** */
//rest
function f(x, y, ...a) {
    console.log(a);
    return (x + y) * a.length
}

f(1, 2, "hello", true, 7);

//spread
function f2(x, y, a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

    return (x + y) * a.length
}
f2(1, 2, ...['hello', true, 7]);

//spread and rest are for iterable objects like arrays and strings


/**************************************Strings*************************** */

//interpolation
var x = 'rania'
console.log(`hello ${x}, ${1 + 4} `);

//access
console.log(x[0]);


/***********************************Objects****************************** */

var x = 0, y = 0;
obj = { x, y }; //badal ma a3ml {x:x,y:y}

obj = {
    foo: "bar",
    // ["baz" + quux()]: 42 //computed object name
}

//function in object
obj = {
    sum(a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b
    },
    mul: (a, b) => {
        return a * b;
    }
}

/*************************************Destruction ******************************** */
//array
var list = [1, 2, 3];
var [a, , b] = list;

//object
var { a, z = 2 } = { a: 12, b: 20, c: 50 };

function m([name, val = 2]) { console.log(name, val) } //destruction of array in parameters
function g({ name: n, val: v }) { console.log(n, v) } //destruction +alias
function h({ name, val = 2 }) { console.log(name, val) } //destuction +default value
m(["bar"]);
g({ name: "foo", val: 7 });
h({ name: "bar" });






