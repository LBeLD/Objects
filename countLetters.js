function countLetters(str) {
  var result = {};
  for (var i = 0; i < str.length; i++){
    if (result[str[i]]) {
      result[str[i]] = result[str[i]] + 1;
    } else {
      result[str[i]] = 1;
    }
  }
  delete result[' '];
  console.log(result);
}



countLetters('lighthouse in the house');


