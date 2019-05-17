
//1
var a = 1;

function b() {
    //    function a() { }  // a is hoisted and defined as local variable
    a = 10;
    return;

    function a() { }
}

b();

console.log(a);

//2

function parent() {

    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent());

/**
 *
 function parent() {
    var hoisted;
    function hoisted() {
        return "I'm a function";
    }
    hoisted= "I'm a variable";
    return hoisted();
}
 */
/**
 *
 * only the variable declaration is hoisted
 * the function declaration and body is hoisted
 */


//3
var myVar = 'foo';

(function () {
    console.log('Original value was: ' + myVar);
    var myVar = 'bar';
    console.log('New value is: ' + myVar);
})();