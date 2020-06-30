const assertEqual = require('./assertEqual');

const head = function (array) {
  return array[0];
}

module.exports = head;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual("no", "good");
// assertEqual(5, 5);
// assertEqual(25, 5);


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["fish", "apple", "doll"]), "fish");
// assertEqual(head([]));
// assertEqual(head(["blue"]), "blue");