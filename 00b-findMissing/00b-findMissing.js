function findMissing (arr) {

  var result = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    if (i === 0 && arr[i] !== 1) {
      return 1;
    }
    
    var firstItem = arr[i];
    
    var secondItem = arr[i + 1];
    
    if (secondItem - firstItem !== 1) {
      result = firstItem + 1;
    }
  }
  
  return result;
}

// Look at each item in the array
// Look at the one after it
// Is there a difference of 1?
// If so, good
// If the difference is not one, return the missing number (prev number + 1)

module.exports = findMissing;