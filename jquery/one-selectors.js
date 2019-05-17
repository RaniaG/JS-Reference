/*****************Selectors******************** */

$('p:first')//first in general (entire document)
$('p:last') //last in general
var x = $('p:even'); //index starting at zero
console.log(x);

$('p:first-child') //p is a fisrt child of its parent
$('p:first-of-type') //the first p inside the parent but there might be other tags preceding it

x = $('p:nth-child(even)');
console.log(x);
x = $('p:nth-child(1)'); //index starts at one
console.log(x);
x = $('p:nth-child(2n+1)'); //odd formula
console.log(x);

$('p:only-child')
$('p:only-of-type')

x = $('li:eq(0)') //index starts at one
console.log(x);
$('li:gt(0)')
$('li:lt(3)')


x = $("div:not(:empty)")
console.log(x);


x = $(":contains('Hello')"); //returns the element and all its ancestors
console.log(x);

$("div:has(p)") //any div that contains a p element

console.log($(":parent")) //all elements which are parent to others
//an element is a parent of text as well
//so it will return all elements whose tags arent empty

console.log($(":hidden")) //returns all hidden elements
//which have display:none
//visibility:hidden doesnt work


$("a[target='_blank']").text("new window");


