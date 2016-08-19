function surfaceAreaAndVolume (obj) {
  var height = obj.height;
  var width = obj.width;
  var depth = obj.depth;

  var volume = height * width * depth;

  var firstSide = height * width * 2;
  var secondSide = height * depth * 2;
  var thirdSide = width * depth * 2;

  var surfaceArea = (firstSide + secondSide + thirdSide);


  var Result = function(surfaceArea, volume){
    var object = {};
    object.surfaceArea = surfaceArea;
    object.volume = volume;
    return object;
  };
  var box = Result(surfaceArea, volume);

  return box;

}



module.exports = surfaceAreaAndVolume;