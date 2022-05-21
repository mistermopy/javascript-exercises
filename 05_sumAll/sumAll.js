const sumAll = function() {
    let result = 0;
    if (arguments[0] > arguments[1]) {
        for (let i = arguments[1]; i <= arguments[0]; i++) {
            result += i;
        }
    } else if ((arguments[0] < 0) || (typeof arguments[0] !== typeof 0)) {
        result = 'ERROR';
    } else if ((arguments[1] < 0) || (typeof arguments[1] !== typeof 0)) {
        result = 'ERROR';
    } else {
        for (let i = arguments[0]; i <= arguments[1]; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
