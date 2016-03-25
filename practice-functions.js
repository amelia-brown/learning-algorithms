// Compare two strings to see whether they share any characters
// Optimized version with only one loop, store values in object to compare
function isUniqueBetter(str) {
  var dictionary = {};
  // Store each letter in object called dictionary
  for (var i = 0; i<=str.length; i++) {
  // Loop through each character of string
    if (!dictionary[str[i]]) {
    // If the character does not exist in the dictionary, store it there
      dictionary[str[i]] = true;
    } else {
    // If the character already exists in the dictionary, stop loop and return false
      return false;
    }
  }
  // If loop finishes and no matches found, return true
  return true;
};

console.log(isUniqueBetter("unique"));
console.log(isUniqueBetter("shalom"));

// Compare two strings to see whether they share any characters
// Less efficient version that has two loops

function isUnique(str) {
// Split the string, and store the array as a variable, arr
  var arr = str.split("");
  for (var i=0; i<=arr.length; i++) {
  // Loop over each index in the arr, store index value in variable i
    for (var x=0; x <=arr.length; x++) {
    // Now loop through the other letters, using x to hold the second index
      if (arr[i] === arr[x] && i !== x ) {
        // If the value at arr[i] and arr[x] match, they are repeated characters, return false
        // If i and x are the same, they are comparing the same letter, so disregard
        return false;
      }
    }
  }
  // If the outer loop runs without any matches, return true
  return true;
};

console.log(isUnique("unique"));
console.log(isUnique("shalom"));


// Count and log each number from 1 to 100
// Multiples of 3 log as "fizz"
// Multiples of 5 log as "buzz"
// Multiples of both 5 and 3 log as "fizzbuzz"

function fizzBuzz() {
  for (i = 0; i <= 100; i++) {
    // Loop through each number from 1 to 100
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      // If the number is divisible by 3 and is not divisible by 5
      // Log fizz to console
      console.log("Fizz");
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      // If number divisible by 5 and not 3
      // Log buzz to console
      console.log("Buzz");
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      // If number divisible by both 3 and 5
      // Log fizzbuzz to console
      console.log("FizzBuzz");
    } else {
      // If not divisible by either, just log number
      console.log(i);
    }
  }
};

fizzBuzz();

// Chessboard takes argument of the size
// The size will determine how long the length
// and width of the chessboard, always a square
// The chessboard forms an alternating pattern of " " and "#"
// like:
//      # # #
//       # #
//      # # #


function chessBoard(size) {
  // Outer loop determines the rows of board
for (i = 0; i < size; i++) {
  // If the index of the row is even:
   if (i%2 === 0) {
     // Define a string that will hold the row's contents
         var string = "";
       for (x = 0; x < size; x++) {
         // For each character in the column
           if (x%2 === 0) {
             // If the column is even, add empty space to string
               string += " ";
           } else {
             // If column is odd, add # to string
               string += "#";
           }
       }
         // Log string for even row
         console.log(string);
       } else {
  // If the index of row is odd
         var string = "";
       for (x = 0; x < size; x++) {
         // For each character in the column
           if (x%2 === 0) {
             // If column is odd, add # to string
             string += "#";
           } else {
             // If the column is even, add empty space to string
             string += " ";
           }
        }
        // Log string for odd row
         console.log(string);
       }
   }
};

chessBoard(8);
