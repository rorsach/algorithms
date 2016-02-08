function flattenIterative(array) {
    'use strict';
    var result = [];
    var context = [];

    // Handle invalid input.
    if (!array || !Array.isArray(array)) {
        return undefined;
    }
    
    while (array && array.length > 0) {
        var item = array.pop();
        
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
    return result.reverse();
}


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
