// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(firstArray, secArray) {
  console.log("firstArray: ", firstArray);
  
  return firstArray.sort().toString() === secArray.sort().toString();
};

// Determin if two objects are equal based on length and matching key-value pairs
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

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const result1 = eqObjects(ab, ba); // => true

assertEqual(result1, true);


const abc = { a: "1", b: "2", c: "3" };
const result2 = eqObjects(ab, abc); // => false

assertEqual(result2, false);

// ARRAYS AS VALUE TEST

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const result3 = eqObjects(cd, dc); // => true
assertEqual(result3, true);

const cd2 = { c: "1", d: ["2", 3, 4] };
const result4 = eqObjects(cd, cd2); // => false
assertEqual(result4, false);