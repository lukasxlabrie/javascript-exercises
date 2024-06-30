const sumAll = function(num1, num2) {
    // Empty array to store numbers between num1 and num2
    const numBetween = [];

    // Loop from num1 to num2 and push each number into numBetween array
    for (let i = num1; i <= num2; i++) {
        numBetween.push(i); // Takes each iteration and saves it in a new array
    }

    // Variable to save the sum of array elements
    let numBetweenSum = 0;

    // Iterate over numBetween and sum the elements
    numBetween.forEach(function(currentValue) {
        numBetweenSum += currentValue; // Add each element to the sum
    });

    // Return the sum of elements between num1 and num2
    return numBetweenSum;
};

console.log(sumAll(1, 4)); // test 1, two numbers
expect(sumAll(1, 4000)); // test 2, big numbers

// Do not edit below this line
module.exports = sumAll;
