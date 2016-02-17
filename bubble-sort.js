//Learning Sorting Algorithms

var myArray = [3, 6, 4, 20, 12, 2, 13, 5, 12, 1];
var yourArray = [125, 2304, 5209, 2390, 2194, 49309, 5289, 2944, 5983, 24934, 23852, 23, 1239, 1490, 4920, 2903, 4209];

// 1 Bubble Sort
// Iterate through the array
//
// For each item in the array, compare it to the next one
// If the second number is less than the first, switch their position
// If the second number is greater than the first, move on to compare the next two items.
// If two numbers are equal in value, move on to compare the next two items.
// When a loop completes without making a single swap, stop the sort.

function bubbleSort(a) {
  var swapped = true
  while (swapped = true) {
    swapped = false;
  for (var i = 0; i < a.count; i++) {
    var j = i + 1;
    if (a[i] > a[j]) {
      var store = a[i];
      a[i] = a[j];
      a[j] = store;
      swapped = true;
    }
  }
  }
  return a;
}

console.log(bubbleSort(myArray));
