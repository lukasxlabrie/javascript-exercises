const convertToCelsius = function(fTemp) {
  //Celsius to Fahrenheit, multiply by 2 then add 30.
let convertedFahTemp = fTemp * 2 + 30;
return convertedFahTemp.toFixed(2); //round deicmal
};

const convertToFahrenheit = function(cTemp) { 
  //Fahrenheit to Celsius, subtract 30 then divide by 2.
  let convertedCelTemp = cTemp - 30 / 2;
  return convertedCelTemp.toFixed(2); // round decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
