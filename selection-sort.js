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
