const convertToCelsius = function(fTemp) {
  //formula for Fahrenheit to Celsius
  let convertedCelTemp = (fTemp - 32) * (5 / 9);
  return Number(convertedCelTemp.toFixed(1)); // Round to one decimal place and return as number
};

const convertToFahrenheit = function(cTemp) { 
  //formula for Celsius to Fahrenheit
  let convertedFahTemp = (cTemp * (9 / 5)) + 32;
  return Number(convertedFahTemp.toFixed(1)); // Round to one decimal place and return as number
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
