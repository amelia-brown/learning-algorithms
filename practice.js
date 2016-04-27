// 1
//
// Write a function lucky_sevens?(numbers), which takes in an array
// of integers and returns true if any three consecutive elements sum to 7.
//
//
// lucky_sevens?([2,1,5,1,0]) == true # => 1 + 5 + 1 == 7
// lucky_sevens?([0,-2,1,8]) == true # => -2 + 1 + 8 == 7
// lucky_sevens?([7,7,7,7]) == false
// lucky_sevens?([3,4,3,4]) == false
//
//
// Make sure your code correctly checks for edge cases (i.e. the
// first and last elements of the array).

function lucky_sevens(arr) {
	for (var i = 0; i < arr.length; i++) {
  	if (arr[i+1] == undefined || arr[i+2] == undefined) {
    	return false;
    } else if (arr[i] + arr[i+1] + arr[i+2] == 7) {
    	return true
    }
  }
};

console.log(lucky_sevens([2,1,5,1,0]));
console.log(lucky_sevens([7,7,7,7,7]));
console.log(lucky_sevens([0,0,0,1,3,1,5,1]));







// Write a function oddball_sum(numbers), which takes in an array of
// integers and returns the sum of all the odd elements.


function oddball_sum(arr) {
	var arrSum = 0;
  for (var i = 0; i < arr.length; i++) {
  	if (i % 2 == 0) {
    	arrSum = arrSum + arr[i];
    };
  };
  return arrSum
};

console.log(oddball_sum([1,2,3,4,5,6,7]));




// Write a function disemvowel(string), which takes in a string,
// and returns that string with all the vowels removed. Treat "y"
// as a consonant.

function disemvowel(string) {
	var noVowel = "";
  var dictionary = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  for (var i = 0; i < string.length; i++) {
  	var currentLetter = string[i];
		if (dictionary[currentLetter.toLowerCase()] !== true) {
    	noVowel = noVowel + currentLetter;
    }
  }
  return noVowel;
};

console.log(disemvowel("Shalom"));
console.log(disemvowel("Anaconda"));
console.log(disemvowel("Foobar"));
console.log(disemvowel("Ruby"));
console.log(disemvowel("Aeiou"));




// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(array) {
  return array.reduce(function(carry, j) {
    	 return carry.concat(j)
    }, []);
};

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]

