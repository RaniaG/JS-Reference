//promise
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 300);
});

promise1.then((str) => {
    alert('str');
}).catch((err) => {
    alert(err);
})

/**3 possible states */

/**
 *
    Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
    Rejected: onRejected() will be called (e.g., reject() was called)
    Pending: not yet fulfilled or rejected
    settled - Has fulfilled or rejected
 *
 */

/***
 * Native JavaScript promises don’t expose promise states.
 *  Instead, you’re expected to treat the promise as a black box.
 *  Only the function responsible for creating the promise will
 *  have knowledge of the promise status, or access to resolve or reject.
 */



/**Chaining */
const wait = time => new Promise(
    res => setTimeout(() => res(), time)
);

wait(200)
    // onFulfilled() can return a new promise, `x`
    .then(() => new Promise(res => res('foo')))
    // the next promise will assume the state of `x`
    .then(a => a)
    // Above we returned the unwrapped value of `x`
    // so `.then()` above returns a fulfilled promise
    // with that value:
    .then(b => console.log(b)) // 'foo'
    // Note that `null` is a valid promise value:
    .then(() => null)
    .then(c => console.log(c)) // null
    // The following error is not reported yet:
    .then(() => { throw new Error('foo'); })
    // Instead, the returned promise is rejected
    // with the error as the reason:
    .then(
        // Nothing is logged here due to the error above:
        d => console.log(`d: ${d}`),
        // Now we handle the error (rejection reason)
        e => console.log(e)) // [Error: foo]
    // With the previous exception handled, we can continue:
    .then(f => console.log(`f: ${f}`)) // f: undefined
    // The following doesn't log. e was already handled,
    // so this handler doesn't get called:
    .catch(e => console.log(e))
    .then(() => { throw new Error('bar'); })
    // When a promise is rejected, success handlers get skipped.
    // Nothing logs here because of the 'bar' exception:
    .then(g => console.log(`g: ${g}`))
    .catch(h => console.log(h)) // [Error: bar]
    ;

/** Only the function that creates the promise should be able to resolve, reject, or cancel the promise. */



//Promisifying a ajax call
function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}





/****************Promise.all */

/**
 * returns a single Promise that resolves when
 * all of the promises passed as an iterable have resolved
 *  or when the iterable contains no promises.
 *  It rejects with the reason of the first promise that rejects.
 */

Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});

