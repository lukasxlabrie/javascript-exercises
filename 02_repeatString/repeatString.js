function repeatString(inputString, inputNumber) {
    let userNumber = parseInt(inputNumber); // Converts user input to an integer
    if (isNaN(userNumber) || userNumber < 0) {
        return 'ERROR'; // Return 'ERROR' if the number is invalid
    }

    let stringRepeater = inputString.repeat(userNumber); // Repeats the string the specified number of times

    return stringRepeater; // Return the repeated string directly
}

module.exports = repeatString; // Exports the function for testing

