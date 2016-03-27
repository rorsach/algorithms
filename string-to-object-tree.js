/**
 * Convert dot delimited string to an object hierarchy. e.g. camera.transform.rotation becomes {camera: { transform: { rotation: value }}}. Optionally pass in an existing object to update or null to have a new object created
 * @param {string} string The dot delimited string representing the hierarchy to create.
 * @param {Object} [obj] The object to which we are assigning the hierarchy. If null, create a new object.
 * @param {} [value] An optional value to assign to the last node in the hierarchy.
 * @returns {Object} The object hierarchy created from the input string 
 */
function stringToObjectTree(string, obj, value) {
    var names = string.split('.');
    arrayToObject(names, obj, value);

    return obj;
}


/**
 * Convert an array to object hierachy. Each element in the array is a child of the preceding element. e.g. ['camera', 'transform', 'rotation'] becomes {camera: { transform: { rotation: value }}}
 * @param {string[]} names The array of names in the namespace to build the object from.
 * @param {Object} [obj] The object to which we are assigning the hierarchy.
 * @param {} [value] An optional value to assign to the last node in the hierarchy.
 * @returns {Object} The object hierarchy constructed from the input array. 
 */
function arrayToObject(names, obj, value) {
    var prop;
    var temp;
    var lastNameIndex = names.length - 1;
    var isValueGiven = arguments.length === 3;

    obj = obj || {};
    temp = obj; // Create a pointer to the object. Future modifications to temp will hang off of obj.
    
    for (var i = 0; i < names.length; i++) {
        prop = names[i];

        if (isValueGiven && i === lastNameIndex) {
            temp[prop] = value;
        } else {
            temp[prop] = temp[prop] || {};
            temp = temp[prop]; // Make this child the new root object.
        }
    }

    return obj;
}
