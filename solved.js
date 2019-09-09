/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);
  var inputArray = args[0];

  var sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  // Highest Product of 3 (positive) integers in an array.
  var solution = function (input) {
    var intArray = input
    var lrgArray = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
    var highestProduct = 0
  
    console.log(`INPUT VALIDATION - INPUT ARRAY[1]:  ${intArray[0]}`)

    const storeLargest = (n) => {
      if(n>lrgArray[0]) { 
        lrgArray[2] = lrgArray[1];
        lrgArray[1] = lrgArray[0];
        lrgArray[0] = n; 
      } 
      else if(n>lrgArray[1]) { lrgArray[2] = lrgArray[1]; lrgArray[1] = n; } 
      else if(n>lrgArray[2]) { lrgArray[2] = n; }
      console.log(`lrgArray = [${lrgArray}]`)
    }

    // Scrub the input array for the 3 largest values
    intArray.forEach( function(element) {
      console.log(`TESTING num... aka. ${element}`)
      storeLargest(element)
    })
    console.log(`THE 3 LARGEST VALUES STORED:  ${lrgArray}`)

    const calcProduct = (acc, currentValue) => acc * currentValue;

    highestProduct = lrgArray[0] * lrgArray[1] * lrgArray[2]

    console.log(`FINAL PRODUCT:  ${lrgArray} = ${highestProduct}`)

    return highestProduct;
  }

  return solution(inputArray)
}
