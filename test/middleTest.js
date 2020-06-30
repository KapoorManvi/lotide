
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns empty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns empty array for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns empty array for [1, 2, 3,4 ,5 ,6]", () => {
    assert.deepEqual(middle([1, 2, 3,4 ,5 ,6]), [3, 4]);
  });  

});




//TEST CODE
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
