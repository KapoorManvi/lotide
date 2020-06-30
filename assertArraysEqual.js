
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secArray) {
  
  // If eqArrays returns true, print identical
  if (eqArrays(firstArray, secArray)) {
    console.log(firstArray + " is identical to " + secArray);
    
    // if eqArrays returns false, print not identical
  } else {
    console.log(firstArray + " is NOT identical to " + secArray);
  }
} 

module.exports = assertArraysEqual;


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual("no", "good");
// assertEqual(5, 5);
// assertEqual(25, 5);

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "5", "3"], ["1", "2", "3"]);