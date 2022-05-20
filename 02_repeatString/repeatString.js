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

// Do not edit below this line
module.exports = repeatString;
