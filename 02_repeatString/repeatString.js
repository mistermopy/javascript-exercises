const repeatString = function(yourString, yourNum) {
    let endResult = yourString;
    if (yourNum == 1) {
        return endResult;
    } else if (yourNum == 0) {
        return '';
    } else if (yourNum < 0) {
        return 'ERROR';
    } else {
        for (i = 0; i < (yourNum - 1); i++) {
            endResult += yourString;
        }
        return endResult;
    }
};

/* const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};
*/

// Do not edit below this line
module.exports = repeatString;
