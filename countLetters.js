// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

// count the number of occurrences of each letter in a string and return report in an object 
const countLetters = function (str) {
  //Set empty object to collect letter counts
  let results = {}
  // Loop through each letter of a string
  for(let s of str) {
    // If the object does not contain an encountered letter, add it to the results object and increase count by 1 each time we encounter it again
    if(!results[s])results[s] = 1;else results[s] = results[s]  + 1;
    
  }
  return results;
  
}
// console.log(countLetters("hello"));

// TEST CODE
const result2 = countLetters("");
const result1 = countLetters("I am not dumb today");

// Count the number of "a" occurrences in result1 string; negative test
assertEqual(result1["a"], 3);
// Count the number of "a" occurrences in result1 string; positive test
assertEqual(result1["a"], 2);
// Count the number of "z" occurrences in result1 string; positive test
assertEqual(result1["z"], undefined);
// Count the number of "z" occurrences in result1 string; negative test
assertEqual(result1["z"], 3);
// Count number of letters in an emptry string; positive test
assertEqual(Object.keys(result2).length, 0);