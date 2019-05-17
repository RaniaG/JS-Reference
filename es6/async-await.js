
/**
 *
 * The word “async” before a function means one simple thing:
 *  a function always returns a promise.
 * Even If a function actually returns a non-promise value,
 * prepending the function definition with the “async” keyword directs
 *  JavaScript to automatically wrap that value in a resolved promise.
 */
async function f() {
    return 1;
}

f().then(alert); // 1

