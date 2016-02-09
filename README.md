# Programming Practice - Algorithms
Implementing various algorithms in JavaScript. These implementations can be run in the browser or in node. They're not namespaced or organized as a library as that is not my intention with this exercise.

Use at your own risk.

## Sorting

* Insertion sort
  * [Source](https://github.com/rorsach/algorithms/blob/master/insertion-sort.js)
  * [Documentation](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec03.pdf) (MIT OpenCourseWare)

* Merge sort
  * [Source](https://github.com/rorsach/algorithms/blob/master/merge-sort.js)
  * [Documentation](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec03.pdf) (MIT OpenCourseWare)
  * Example Merge sort step by step output:

            1. [5, 2, 4, 1, 6, 3, 7, 0]
            2. [2, 5, 4, 1, 6, 3, 7, 0]
            3. [2, 5, 1, 4, 6, 3, 7, 0]
            4. [1, 2, 4, 5, 6, 3, 7, 0]
            5. [1, 2, 4, 5, 3, 6, 7, 0]
            6. [1, 2, 4, 5, 3, 6, 0, 7]
            7. [1, 2, 4, 5, 0, 3, 6, 7]
            8. [0, 1, 2, 3, 4, 5, 6, 7]

     Possible improvements:

     * Don't recreate the auxiliary output array on each call of merge.
     * Make use of slice to simplify the logic that keeps track of indices.
     * Combine with insertion sort at a given level of granularity - apparently this can give a little speed boost.

* JS Flatten Array
  * [Source](https://github.com/rorsach/algorithms/blob/master/flatten-array.js)
  * Flattens nested arrays leaving objects untouched.

             // This:    [1, {key:value}, [3, 4, [5, 6]]]
			 // Becomes: [1, {key:value}, 3, 4, 5, 6]
