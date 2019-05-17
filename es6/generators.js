function* generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2

    console.log('I will be printed after the pause');
    yield 'World!';
}

const generatorObject = generatorFunction(); // Line 3

console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6

// This will be executed first.
// Hello, 
// I will be printed after the pause
// World!
// undefined



let fibonacci = function* (numbers) {
    let pre = 0, cur = 1;
    while (numbers-- > 0) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}
// for (let n of fibonacci(1000))
//     console.log(n);
let numbers = [...fibonacci(1000)]; //3shan yraga3 kol el values
console.log(numbers);
let [n1, n2, n3, ...others] = fibonacci(1000);