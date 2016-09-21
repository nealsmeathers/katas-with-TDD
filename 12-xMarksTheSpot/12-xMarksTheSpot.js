function xMarksTheSpot (arrays) {
  var result = [];
  for(var i = 0; i < arrays.length; i++) {
    var array = arrays[i];
    for(var j = 0; j < array.length; j++) {
      if (array[j] === 'x') {
        result.push(i);
        result.push(j);
        return result;
      }

    }

  }
  return result
}
module.exports = xMarksTheSpot;