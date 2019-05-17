/**
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 */

let s = new Set()
s.add("hello").add("goodbye").add("hello"); //s.size === 2;
s.has("hello") === true
for (let key of s.values())// insertion order
    console.log(key)


/**
 *
 * The Map object holds key-value pairs and remembers the original insertion order of the keys.
 * Any value (both objects and primitive values) may be used as either a key or a value
 *
 *
 *
 * Object is similar to Map in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences that make using a Map preferable in certain cases:

   * The keys of an Object are String and Symbol, whereas they can be any value for a Map, including functions, objects, and any primitive.
    *The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion. (Note that in the ECMAScript 2015 spec objects do preserve creation order for string and Symbol keys, so traversal of an object with ie only string keys would yield keys in order of insertion)
    *You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
    *A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
    *An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using Object.create(null), but this is seldom done.
    *A Map may perform better in scenarios involving frequent addition and removal of key pairs.

 */

let m = new Map();
let s = Symbol();
m.set("hello", 42);
m.set(s, 34);
m.get(s) === 34;
m.size === 2;
for (let [key, val] of m.entries())
    console.log(key + " = " + val);