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

/*const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;*/

// Do not edit below this line
module.exports = sumAll;
