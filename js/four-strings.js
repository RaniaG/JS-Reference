var s1 = 'rania'

//charAt
console.log(s1.charAt(1));

//charCodeAt
console.log(s1.charAt(1));

//concat
var s2 = s1.concat('abc', '12');
console.log(s2);
console.log(s1); //doesnt change the original string

//indexof,lastindexOf
console.log(s2.indexOf('abc', 1));
console.log(s1.indexOf('z'));

//match regex
var str = "Javatpoint";
console.log(str.match(/[a-p]/g));
console.log(str.match(/Java/g));  //returns an array of matched substrings


//replace
var str = "Javatpoint";
console.log(str.replace("tpoint", "Script"));
str = 'rania, is ! however,;'
console.log(str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));


//substring
console.log(str.substr(0, 4)); //start index , length
console.log(str.substring(0, 4));


//slice
// string.slice(start,end)  
console.log(str.slice(0, 4));

//split
str = "How are you doing today?";
console.log(str.split(" "));

//ends with, starts with
str = "Hello world, welcome to the universe.";
console.log(str.endsWith("universe."));

//search
str = "Mr. Blue has a blue house";
console.log(str.search("blue")); //returns index
console.log(str.search('mr')); //returns -1

//trim


//repeat
console.log("foo".repeat(3))