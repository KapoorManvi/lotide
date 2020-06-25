// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, val) {
 
  //Loop through the object and look at all keys and if the key value matches the passed value, return the key
 
 for (let key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
 


  }


// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// This is a posisitve test that looks for the drama key after passing The Wire
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// This is a negative test that looks for drama key after passing The Expanse value
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
// This is a positive test that looks for the sci_fi key after passing The Expanse value
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// This is a negative test that looks for the comedy category after passing a value that does not exist
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Big Bang Theory"), "comedy");