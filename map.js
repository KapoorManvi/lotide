
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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
// console.log(results1);

//TEST CODE

//Positive test
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
//Negative test
assertArraysEqual(results1, ['c', 'c', 't', 'm', 't']);
//Negative tesst
assertArraysEqual(results1, []);