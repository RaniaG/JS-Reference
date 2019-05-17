/******************Creation-*********************** */

//literal
var emp = ["Sonoo", "Vimal", "Ratan"];

//new
var emp2 = new Array();
emp[0] = "Arun";
emp[1] = "Varun";
emp[2] = "John";

var emp3 = new Array("Jai", "Vijay", "Smith");



/*********************Functions************************ */

//concat
var a1 = [1, 4, 'a'];
var a2 = ['a', 'b', 'c'];
var res = a1.concat(a2);
console.log(res);


//every
//array.every(callback(currentvalue,index,arr),thisArg)  
//checks if every element satisfies a condition
var isBiggerThan2 = res.every((val, index) => {
    return val > 2;
})
console.log(isBiggerThan2);


//fill

var filled = [].fill('hello', 0, 3);
console.log(filled); //returns empty array

filled = a1.fill('hello');
console.log(filled);


//filter
var filtered = res.filter((val, index) => {
    return res.indexOf(val) === index;
});
console.log(filtered);

//find
var arr = [{ id: 5 }, { id: 10 }, { id: 4 }];
var result = arr.find(x => x.id == 6); //returns undefined if not found
console.log(result);

//find index
console.log(arr.findIndex((val, index, arr) => {
    return val.id === 7; //returns -1;
}))

//forEach

//includes
//array.includes(element,start index)  search element must be string or number only
console.log(arr.includes({ id: 5 })) //returns false bec it cant compare objects
console.log([1, 'a', 1].includes(1, 1));

//indexof
//takes an element not predicate
arr.indexOf('abc');

//join
//transforms array into string
console.log([1, 2, 4].join(', '));

//map

//pop,push
var x = [];
var y = x.push(1, 2, 3); //returns the last element pushed
console.log(y);
console.log(x);

//reverse
console.log(x.reverse()); //returns the reversed array and the 
console.log(x); //also reverses the array

//pop and shift ->both modify the array
//shift removes the first element
//pop removes the last element


//slice
//extracts a part of the array without modifying it
console.log([1, 2, 3, 4].slice(1, 3)); //start index and end index  excluding end


//splice
//add or remove elements from array
// array.splice(start,delete,element1,element2,)  
/**
 * start - It represents the index from where the method start to extract the elements.

delete - It is optional. It represents the number of elements to be removed.

element1,element2,...,elementn - It is optional. It represent the elements to be inserted.
 */
arr = ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday", "Friday"];
var result = arr.splice(2, 2, "Wednesday");
console.log(result);
console.log(arr);


//unshift
//adds element to start of the array


//reduce
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
var sum = [1, 3, 4, 5].reduce((acc, val) => {
    return acc + val
});
console.log(sum);

//reduceRight
//btmshy 3la el array from right to left

