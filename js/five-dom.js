var div = document.getElementById('one');


//html collection
var divs = document.getElementsByClassName('two');
console.log(divs);

var divs2 = document.querySelectorAll('.two');
console.log(divs2);

var div2 = document.getElementById('two');
div2.innerText = 'hello';
console.log(divs[0].innerText);
console.log(divs2[0].innerText);

console.log(document.getElementsByName('rania'));
console.log(document.getElementsByTagName('div'));
