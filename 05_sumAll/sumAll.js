const sumAll = function(num1, num2) { // states that thi sfunction will need 2 inputs
const numBetween = []; // empty array to be used to store numbers between 2 inputs
for (let i = num1; i <= num2; i++){ //will run while num 2 is less than num1
    numBetween.push(i) //takes each iterration and saves it in a new array
};

let numBetweenSum = 0 // empty var to save sum of array elements to
numBetween.forEach (function(currentValue){
    numBetweenSum += currentValue;
})
sumTotal = numBetweenSum + num1 + num2; // adds the array and inputs
return sumTotal; // prints the sum 
};

sumAll(1, 4) //test1
// Do not edit below this line
module.exports = sumAll;
