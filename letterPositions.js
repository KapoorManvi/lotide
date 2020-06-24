
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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== ' ') {
        if (results[sentence[i]]) {
            //Number() <--- gets converted into a int or float
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
assertArraysEqual(letterPositions("hello").e, [1]);