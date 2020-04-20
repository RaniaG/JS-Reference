/*
Closure means that an inner function always has access
to the vars and parameters of its outer function,
even after the outer function has returned.
*/
/**
 * One important characteristic of closure is that 
 * outer variables can keep their states between multiple calls. 
 * Remember, inner function does not keep the separate copy of outer variables 
 * but it reference outer variables, 
 * that means value of the outer variables will be changed if you change it using inner function. 
 */
function OuterFunction() {
    var outerVariable = 2;
    function InnerFunction() {
        alert(outerVariable);
    }
    InnerFunction();
}
OuterFunction();//alert 2

function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4
//all calls access the same counter variable

