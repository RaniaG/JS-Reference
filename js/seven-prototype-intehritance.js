/******************New**************************** */
//created a new object based on this variable, and puts parent prototype in child prototype
//child= this of parent
//child.prototype=parent.prototype
let parent = function (name, age) {
    this.name = name;
    this.age = age;
}
let child = new parent("rania", 25);


//function prototype property 
console.log(parent.prototype);// this variable of function

parent.prototype.lastName = "Gamal";
console.log(parent.lastName);//undefined, why? bec we cant access prototype of function from it
console.log(child.lastName);//gamal, why? bec new operator puts the parent prototype in child prototype

parent.prototype.age = 30;
console.log(child.age);//25 bec it is found in child first

//proto
parent.__proto__.city = "cairo";
console.log(parent.city);//cairo
console.log(child.city);//undefined


/****************** Object.Create() **************************** */
//puts the base object in derived object prototype
let base = { name: "rania", lastName: "gamal" };
base.__proto__.age = 50;
let derived = Object.create(base);

console.log(derived);//{}
console.log(derived.name);//rania, from prototype
console.log(base.age);//50, in proto
console.log(derived.age);//50, in proto of proto

let child2 = Object.create(parent);//{}
console.log(child2.__proto__); //parent


/*****************prototype chain ***************************************/
var abc = { a: 1 } //abc.prototype=>object.prototype=>null

var arr = [1, 3, 22]; //arr.proto=>array.proto=>object.proto=>null


/************************************ delete ***************************************/
var a = { one: 1 }
var b = Object.create(a);
console.log(b.one);//1
delete b.one;
console.log(b.one);//1, bec it is in the prototype
delete a.one;
console.log(b.one);//undefined


/************************************* this *******************************************/

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
}
let speedy = { __proto__: hamster };
let lazy = { __proto__: hamster };
speedy.eat("apple");
console.log(lazy.stomach);//apple


