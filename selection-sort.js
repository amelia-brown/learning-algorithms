var myArray = [3, 6, 4, 20, 12, 2, 13, 5, 12, 1];
var yourArray = [125, 2304, 5209, 2390, 2194, 49309, 5289, 2944, 5983, 24934, 23852, 23, 1239, 1490, 4920, 2903, 4209];


function selectionSort(a) {
 for (var i = 0; i < a.length; i++) {
   var least = i;
   for (var j = i + 1; j < a.length; j++) {
     if ( a[j] < a[least] ) {
       least = j;
     }
   }
   if ( least != i ) {
     var store = a[i];
     a[i] = a[least];
     a[least] = store;
   }
 }
 return a;
}

console.log(selectionSort(myArray));
