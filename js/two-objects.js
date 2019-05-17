var obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}
/**Object.assign */
var obj2 = Object.assign({ d: 'd' }, obj);
var obj3 = {}
Object.assign(obj3, obj2)


/**object.entries */
//returns array of arrays of keys and values
var arr = Object.entries(obj2);
/**
 * [
 *  [a,a],
 *  [key,val]
 * ]
 */
console.log(arr);

/**Object.freeze */
//prevents modification of properties of object
"use strict";
var obj4 = Object.freeze(obj);
//none of these modifications will apply
obj4.a = 'abc';
delete obj4.a;
obj4.z = 'z';

/**Object.seal */
//similar to freeze
obj5 = Object.seal(obj);
obj5.a = 'abc';
delete obj5.a;
obj5.z = 'z';
console.log(obj5);

/**Object.keys */
console.log(Object.keys(obj4));

/**Object.values */
console.log(Object.values(obj4));



