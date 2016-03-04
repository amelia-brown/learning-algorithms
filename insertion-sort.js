var myArray = [3, 6, 4, 20, 12, 2, 13, 5, 12, 1];
var yourArray = [125, 2304, 5209, 2390, 2194, 49309, 5289, 2944, 5983, 24934, 23852, 23, 1239, 1490, 4920, 2903, 4209];


function insertionSort(a) {
  for (var i = 1; i < a.length; i++) {
    var greatest = a[i-1];
    while (greatest < i) {
      for (var j = i - 1; j >=0 ; j--) {
        while (a [j] < a[greatest]) {
          var store = a[j];
          a[j] = a[greatest];
          a[greatest] = store;
        }
      }
    }
  }
  return a;
}

//console.log(insertionSort(myArray));
