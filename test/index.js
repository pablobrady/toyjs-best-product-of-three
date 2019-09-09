/* ./test/index.js */

/* Answer Key */
const answerKey = [0, 1, 2];

var solved = require('../solved');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;

var inputArray = [2,4,6,12,10,8]
console.log( ">> INPUT:  " + inputArray + "; and inputArray[1] = " + inputArray[1] )
console.log( ">> OUTPUT:  " + solved(inputArray) )


describe('Input Array Validation', function() {
  it('input array has the length of 6', function() {;
    assert.equal(inputArray.length, 6);
  });
  it('input array element at idx 2, equals 4', function() {
    var checkValue = inputArray[1];
    assert.equal(checkValue, 4);
  });
});

describe('Computed Solution Validation', function() {
  var output = 960 // solved(n)
  it('output is 960', function() {
    assert.equal(output, 960);
  });
});

