var myArray = [3, 6, 4, 20, 12, 2, 13, 5, 12, 1];
var yourArray = [125, 2304, 5209, 2390, 2194, 49309, 5289, 2944, 5983, 24934, 23852, 23, 1239, 1490, 4920, 2903, 4209];


function insertionSort(a) {

  // Iterate through each item in the array
  for (var i = 0; i < a.length; i++) {

    // Select the current item, "extract from array"
    var copy = a[i];

    // Check the extracted item against the item to the left
    // If the value is greater, swap and check against the next value
    // Exit loop when if value on left is less than j
    for (var j = i - 1; j >= 0 && (a[j] > copy); j--) {
      a[j + 1] = a[j];
    }
    a[j+1] = copy;
  }
  return a;
}

console.log(insertionSort(myArray));
