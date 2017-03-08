function countLetters(str) {
  var result = {};
  for (var i = 0; i < str.length; i++){
    if (result[str[i]]) {
      result[str[i]].push(i);
    } else {
      result[str[i]] = [i];
    }
  }
  delete result[' '];
  console.log(result);
}

countLetters('lighthouse in the house');