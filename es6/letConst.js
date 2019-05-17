function getShape(condition) {
    // shape doesn't exist here

    //console.log(shape); //=> ReferenceError: shape is not defined

    if (condition) {
        // console.log(shape);  //also reference error
        let shape = "square";
        // some other code
        return shape;
    } else {
        // shape doesn't exist here as well
        return false;
    }
}


console.log(getShape(true));


/**The Temporal Dead Zone */
/**
 * the time between the variable (scope) creation and the initialisation
 */

/**
 * let and const are hoisted but the difference is that they arent given an initial value=undefined
 */