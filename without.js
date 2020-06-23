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

const without = function(sourceArray, removeArray) {
  
  // New array to hold source items that do not appear in removeArray
  let newArray = [];
  
  // Nested loop to compare items in both arrays
  for (let i = 0; i < sourceArray.length; i++){

    let shouldKeep = true;

    for (let j = 0; j <removeArray.length; j++) {
    

      // When there is a match, we don't keep said element
      if (removeArray[j] === sourceArray[i]) {
        shouldKeep = false;
      } 
      
    }
    // Push the items that we should keep to the new array
    if (shouldKeep) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
}
// console.log(without([1, 2, 3, 4, 5], [1, 2, 3]));

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual("no", "good");
// assertEqual(5, 5);
// assertEqual(25, 5);

// assertArraysEqual([1, 2, 3,], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "5", "3"], ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
const jello = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(jello);
assertArraysEqual(jello, ["hello", "world"]);