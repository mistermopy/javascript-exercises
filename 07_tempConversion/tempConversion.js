const ftoc = function(tempF) {
  // [°C] = ([°F] − 32) × 5⁄9
  let tempC = ((tempF - 32) * 5)/9;
  return Math.round(tempC * 10) / 10;
};

const ctof = function(tempC) {
 // [°F] = [°C] × 9⁄5 + 32
  let tempF = (tempC * 9)/5 + 32;
  return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};