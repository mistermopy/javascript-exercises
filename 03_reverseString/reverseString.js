const reverseString = function(string) {
    /*
 return string.split('').reverse().join('');
};
*/
    let endResult = '';
    let strArray = string.split('');
    for (i = string.length - 1; i >= 0; i--) {
        endResult += strArray[i];
    }
    return endResult;
};

// Do not edit below this line
module.exports = reverseString;
