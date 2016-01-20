# Programming Practice - Algorithms
Implementing various algorithms in JavaScript.

The implementations can be run in the browser or in node. They're not namespaced or organized as a library as that is not my intention with this exercise.

Use at your own risk.

* Insertion Sort
* Merge Sort

  Example Merge Sort step by step output:

	  [5, 2, 4, 1, 6, 3, 7, 0]
	  [2, 5, 4, 1, 6, 3, 7, 0]
	  [2, 5, 1, 4, 6, 3, 7, 0]
	  [1, 2, 4, 5, 6, 3, 7, 0]
	  [1, 2, 4, 5, 3, 6, 7, 0]
	  [1, 2, 4, 5, 3, 6, 0, 7]
	  [1, 2, 4, 5, 0, 3, 6, 7]
	  [0, 1, 2, 3, 4, 5, 6, 7]

  Possible Improvements:

  * Don't recreate the auxiliary output array on each call of merge.
  * Make use of slice to simplify the logic that keeps track of indices.

