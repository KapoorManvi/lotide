

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

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TEST CODE

//Positive Test
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
//Negative Test
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1]);

console.log('---');

//Positive Test
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
//Negative Test
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", "I've"]);
