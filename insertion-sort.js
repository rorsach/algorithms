var insertionSort = function (array) {
	var i;
	var j;
	var key;
	
	for (j = 1; j < array.length; j++) {
		key = array[j];
		i = j - 1;
		while (i >= 0 && array[i] > key ) {
			array[i + 1] = array[i];
			i = i - 1;	
		}
		array[i + 1] = key;
		console.log(array.toString());
	}
};

var randomizedArray = [3, 1, 4, 2, 5];

console.log(randomizedArray.toString());
insertionSort(randomizedArray);
console.log(randomizedArray.toString());
