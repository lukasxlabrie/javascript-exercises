const convertToCelsius = function(fTemp) {
  //Celsius to Fahrenheit, multiply by 2 then add 30.
let convertedFahTemp = fTemp * 2 + 30;
return convertedFahTemp;
};

const convertToFahrenheit = function(cTemp) { 
  //Fahrenheit to Celsius, subtract 30 then divide by 2.
  let convertedCelTemp = cTemp - 30 / 2;
  return convertedCelTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
