const leapYears = function(inputYear) {
    if ((inputYear % 100 == 0) && (inputYear % 400 == 0)) {
        return true;
    } else if ((inputYear % 4 == 0) && (inputYear % 100 !==0)) {
        return true;
    } else {
        return false;
    }
};

/*const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};*/

// Do not edit below this line
module.exports = leapYears;
