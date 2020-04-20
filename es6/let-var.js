//let is block scoped, that means it created new variable for each iteration in the loop
for (var i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i) }, 0);//#2
}
console.log(i);//#1
//prints #1: 5
//prints #2 5 times:5

for (let j = 0; j < 5; j++) {
    setTimeout(() => { console.log(j) }, 0);
}
console.log(j);
//prints #1: reference error
//prints #2: 0,1,2,3,4


debugger;
for (var j = 0; j < 5; j++) {
    setTimeout(console.log(j), 0);
}
console.log(j);
//0,1,2,3,4,5