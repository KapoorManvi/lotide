
const eqArrays = function(firstArray, secArray) {
  return firstArray.sort().toString() === secArray.sort().toString();
}

const assertArraysEqual = function(firstArray, secArray) {
  
  // If eqArrays returns true, print identical
  if (eqArrays(firstArray, secArray)) {
    console.log(firstArray + " is identical to " + secArray);
    
    // if eqArrays returns false, print not identical
  } else {
    console.log(firstArray + " is NOT identical to " + secArray);
  }
} 

// Indicate the index or position of each letter occurrence in a string and return in an object
const letterPositions = function(sentence) {
  // Collect occurrences 
  const results = {};
  // Loop through each letter of a string
  for (let i = 0; i < sentence.length; i++) {
    // if there is no space detected in the string
    if (sentence[i] !== ' ') {
      // for each letter index
        if (results[sentence[i]]) {
            //Number() <--- gets converted into a int or float and add to results object
            results[sentence[i]].push(Number(i));
        } else {
            results[sentence[i]] = [Number(i)];
        }
    }
  
};
return results;
}
// console.log(letterPositions("hello"));


// TEST CODE
// Is "e" at index 1? Yes, so this is a positive test
assertArraysEqual(letterPositions("hello").e, [1]);
// Is "o" at index 1? No, so this is a negative test
assertArraysEqual(letterPositions("hello").o, [1]);
