/**
 * Flatten an array iteratively.
 * @param {} array
 * @returns {} New array with nested arrays from the input flattened.
 */
function flattenIterative(array) {
    'use strict';
    var result = [];
    // When iteratiing through a nested array it is necessary to store the context of the parent array to be able to return there.
    var context = [];
    var item;

    // Handle invalid input.
    if (!array || !Array.isArray(array)) {
        return undefined;
    }
    
    while (array && array.length > 0) {
        item = array.pop();
        
        if (Array.isArray(item)) {

            // Keep track of the depth of the nested array we are reading
            context.push(array);
            array = item;
        } else {
            result.push(item);
        }

        // Any time we reach the end of an array, we must go up one level to the top of our context stack.
        if (array.length === 0) {

            // Throw away the empties.
            while (context && context.length > 0 && context[context.length - 1].length === 0) {
                array = context.pop();
            }

            // Make the next non empty array current.
            array = context.pop();
        }
    }

    // Because we use pop to process the arrays, the result is reversed.
    // pop() is a much faster operation than unshift().
    // TODO: performance comparison of alternatives.
    return result.reverse();
}


/**
 * Flatten an array recursively.
 * @param {} array Array that may contained nested array structures.
 * @returns {} New array with nested arrays from the input flattened.
 */
function flattenRecursive(array) {
    'use strict';
    var result = [];
    var temp = [];
    
    if (!array || !Array.isArray(array)) {
        return undefined;
    }
    
    array.forEach(function(item, index) {
        
        if (Array.isArray(item)) {
            temp = flattenRecursive(item);
            temp.forEach(function(item, index) {
                result.push(item);
            });            
        } else {
            result.push(item);
        }
        
    });
    
    return result;
}

var testInputs = [
    [],
    [1, {obj: [3, 4]}, ['a', ['b', 'c']], [['d'], 'e', 'f'], 'g'],
    [[]],
    [[],[]],
    [[[[1, [[2, [[[[3, [[]]]]]]]]]]]],
    [[[[1, [[2, [[[[undefined, [[]]]]]]]]]]]],
];

var testInputs2 = [
    [],
    [1, {obj: [3, 4]}, ['a', ['b', 'c']], [['d'], 'e', 'f'], 'g'],
    [[]],
    [[],[]],
    [[[[1, [[2, [[[[3, [[]]]]]]]]]]]],
    [[[[1, [[2, [[[[undefined, [[]]]]]]]]]]]],
];

// console.log(flattenRecursive(input));

// Test all the inputs.
for (var i = 0; i < testInputs.length; i++) {
    console.log(flattenIterative(testInputs[i]));

}

console.log('omitted input:', flattenIterative());
console.log('Object input:', flattenIterative({}));
console.log('Number input:', flattenIterative(1));
