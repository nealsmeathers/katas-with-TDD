function countingMonkeys (n) {
  
  var monkey = [];
  {

    for (var i = 1; i < n + 1; i++) {

      monkey.push(i);
    }
  }
  return monkey;
}


module.exports = countingMonkeys;