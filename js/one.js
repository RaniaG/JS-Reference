/***************Writing to html ****************/

//1
var element = document.getElementById("one");

element.innerText = 'hello';
element.innerHTML = '<p>hello</p>';

//2
document.write('sth');

//3
window.alert('hello');



/***************Data types *******************/

//primitives
var num = 1 //number
var str = 'rania' //string
var uf //undefined
var bl = false //boolean


//objects
var nl = null //null is an object
var abc = function () { //function
    console.log("object")
}
var arr = ['abc', 123, false, null] //array



/**Functions */

//function statement
function add(a, b) {
    return a + b;
}

//function expression
var addition = function (a, b) {
    return a + b;
}

add(1);
add(1, 2);


/******************Objects ******************/
/**Creation */
//1-object literal
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

//2-new object
var person2 = new Object();
person2.firstName = 'rania';

//3-new
function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
var e = new emp(103, "Vimal Jaiswal", 30000);

//4-object create 
//inherits prototype //bya5od person dah w y7oto f el prototype bta3 el newobject
var newperson = Object.create(person, {
    eyeColor: {
        value: 'brown'
    },
    hair: {
        value: 'black'
    }
});
console.log(newperson.age);



/**Access */
person.name = 'rania';
console.log(person.name);
console.log(person['name']);



/**Truncate */
console.log(Math.trunc(42.7))// 42 
console.log(Math.trunc(0.1)) // 0 
console.log(Math.trunc(-0.1)) // -0
