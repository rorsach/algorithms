/*global mergeSort*/

/**
 * Merge Sort
 * @param {Number[]} array - The array to sort. array is overwritten with sorted elements  
 */
var mergeSort = (function() {
    "use strict";
    var mergeSort = function mergeSort(array, low, high) {
        var middle;

        // Specify the defaults for the initial call.
        low = low || 0;
        high = high || array.length;

        // At this level of granularity the array is de-facto sorted.
        if (high - low < 2) {
            return;
        }

        // It is still possible to split the array smaller. Find the middle.
        middle = Math.floor((high - low) / 2) + low;

        // Recursively split each half.
        mergeSort(array, low, middle);
        mergeSort(array, middle, high);

        // Once we reach the smallest level of granularity, the recursive calls hit the return statement above.
        merge(array, low, middle, high);
    };

    var merge = function merge(array, low, middle, high) {
        var i = low;
        var j = middle;
        var k = low;
        var output = []; 

        // Compare and merge slices into output array.
        while (i < middle && j < high) {
            if (array[i] < array[j]) {
                output[k] = array[i];
                i++;
            } else {
                output[k] = array[j];
                j++;
            }

            k++;
        }
        
        // Array slices are of uneven lengths - append the remaining numbers to output.
        while (i < middle) {
            output[k] = array[i];
            k++;
            i++;
        }

        // Array slices are of uneven lengths - append the remaining numbers to output.
        while (j < high) {
            output[k] = array[j];
            k++;
            j++;
        }

        // Update original array with sorted elements.
        for (i = low; i < k; i++) {
            array[i] = output[i];
        }

        // For educational purposes, print out each merge step.
        console.log(array); 
    };

    return mergeSort;
})();

//
// Basic Tests
//

// var unsortedArray = [220, 825, 381, 539, 215, 621, 668, 639, 576, 553, 683, 685, 372, 715, 788, 237, 640, 725, 465, 702, 346, 560, 375, 117, 747, 395, 151, 506, 301, 449, 293, 344, 619, 554, 280, 116, 336, 180, 861, 270, 419, 149, 476, 531, 793, 487, 790, 104, 743, 331, 349, 568, 889, 550, 425, 176, 691, 836, 292, 304, 600, 367, 768, 385, 622, 556, 298, 500, 824, 450, 350, 731, 404, 868, 204, 243, 722, 587, 469, 795, 335, 227, 557, 229, 413, 814, 699, 662, 484, 454, 642, 664, 787, 610, 452, 835, 474, 226, 848, 378, 225, 616, 535, 140, 635, 605, 432, 221, 394, 643, 651, 124, 110, 194, 513, 409, 497, 172, 411, 273, 354, 309, 244, 777, 624, 483, 230, 778, 323, 488, 461, 185, 561, 575, 177, 338, 294, 784, 287, 319, 266, 361, 329, 174, 803, 558, 391, 132, 707, 446, 155, 239, 332, 525, 806, 586, 122, 188, 190, 526, 552, 781, 183, 141, 563, 435, 548, 658, 652, 306, 810, 503, 872, 716, 252, 369, 663, 345, 794, 546, 859, 232, 186, 152, 456, 522, 798, 393, 876, 416, 816, 340, 729, 764, 491, 302, 879, 463, 347, 145, 538, 772, 236, 184, 760, 885, 870, 222, 496, 144, 886, 422, 389, 436, 874, 524, 259, 100, 812, 388, 264, 135, 374, 617, 774, 865, 585, 128, 509, 533, 139, 207, 735, 105, 882, 819, 471, 627, 656, 379, 327, 245, 645, 634, 480, 641, 630, 604, 853, 161, 262, 660, 571, 542, 577, 565, 751, 607, 383, 123, 489, 168, 482, 405, 728, 242, 594, 115, 281, 773, 211, 569, 250, 887, 126, 311, 771, 779, 453, 582, 669, 154, 119, 403, 129, 399, 363, 102, 313, 891, 438, 342, 850, 246, 602, 523, 626, 380, 681, 897, 241, 609, 530, 101, 888, 782, 720, 714, 444, 545, 896, 271, 549, 251, 231, 632, 864, 462, 682, 321, 654, 762, 797, 501, 733, 813, 199, 178, 674, 646, 494, 457, 159, 817, 739, 277, 710, 900, 847, 210, 158, 443, 783, 322, 418, 823, 430, 515, 802, 133, 786, 703, 468, 845, 510, 181, 200, 267, 131, 855, 623, 828, 295, 608, 197, 875, 540, 693, 738, 428, 265, 631, 478, 108, 247, 333, 704, 892, 109, 749, 800, 843, 357, 839, 769, 880, 589, 164, 597, 216, 507, 673, 171, 279, 536, 330, 408, 829, 505, 833, 396, 551, 516, 470, 475, 511, 665, 844, 737, 289, 165, 189, 521, 742, 570, 353, 854, 667, 434, 863, 822, 339, 867, 713, 254, 894, 578, 776, 376, 858, 420, 873, 827, 719, 490, 455, 804, 364, 581, 690, 412, 150, 748, 310, 811, 127, 234, 103, 228, 834, 638, 157, 647, 598, 359, 235, 537, 114, 192, 274, 791, 448, 633, 485, 112, 258, 406, 437, 175, 334, 512, 759, 166, 672, 766, 718, 305, 529, 898, 368, 801, 278, 219, 574, 160, 893, 588, 142, 433, 852, 337, 486, 263, 130, 543, 628, 755, 502, 698, 504];
// var smallArray = [5, 2, 4, 1, 6, 3, 7, 0];
// var smallArray = [5, 2, 3, 1, 4];

// console.log(smallArray);
// mergeSort(smallArray);
// console.log(smallArray.toString());
// mergeSort(unsortedArray);
// console.log(unsortedArray);
