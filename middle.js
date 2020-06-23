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

const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    midArray = midArray;
  } else if (array.length % 2 == 0) {
    midArray.push(array[Math.floor((array.length - 1) / 2)], array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 != 0) {
    midArray.push(array[Math.floor(array.length / 2)]);
  } 
  return midArray;
}
console.log(middle([1, 2]));

//TEST CODE
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


