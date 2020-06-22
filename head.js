// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  return array[0];
}

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual("no", "good");
// assertEqual(5, 5);
// assertEqual(25, 5);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["fish", "apple", "doll"]), "fish");
assertEqual(head([]));
assertEqual(head(["blue"]), "blue");