// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(firstArray, secArray) {
  return firstArray.sort().toString() === secArray.sort().toString();
}

// const assertArraysEqual = function(firstArray, secArray) {
  
//   // If eqArrays returns true, print identical
//   if (eqArrays(firstArray, secArray)) {
//     console.log(firstArray + " is identical to " + secArray);
    
//     // if eqArrays returns false, print not identical
//   } else {
//     console.log(firstArray + " is NOT identical to " + secArray);
//   }
// };
 
// Determine if two objects are equal based on length and matching key-value pairs
const eqObjects = function (object1, object2) {
  // If lengths do not match, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // const cd = { c: "1", d: ["2", 3] };
  // const dc = { d: ["2", 3], c: "1" };
  // Loop through the keys and if they are arrays, run eqArrays function to detemine if there is a match
  for (let key of Object.keys(object1)) {
    // console.log("key: ", key);
    let valueA = object1[key];
    let valueB = object2[key];// object2.c
    // console.log("valueA: ", valueA);
    // console.log("valueB: ", valueB);
    
    // console.log("Array.isArray: ", Array.isArray(valueA));
    if (Array.isArray(valueA)) {
      if (eqArrays(valueA, valueB) === false) {
        return false;
      }
      // If not arrays, compare key value pairs and if no match, return false
    } else if (object1[key] !== object2[key]) {
      return false;
    } 


  }
  // If no falses found, return true indicating match on both conditions
  return true;
};

//Write comprehensible pass/fail messages
const assertObjectsEqual = function(actual, expected) {
  //Import inspect library
  const inspect = require('util').inspect;
  //Compare objects using eqObjects function
  if (eqObjects(actual, expected)) {
    //Pass message if comparison is equal
    console.log(`💚💚💚Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    
    // Fail message if comparison is not equal
  } else {
    console.log(`💔💔💔Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE

//Positive test returns true since objects are equal; returns assertion passed
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
//Negative test returns false since objects are not equal; returns assertion failed
assertObjectsEqual({ c: "2", d: ["2", 3] }, { d: ["2", 3], c: "1" });

