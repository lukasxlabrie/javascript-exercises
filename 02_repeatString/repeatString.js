
let inputString = prompt ("Enter a word: "); //ask user for a word
let inputNumber = prompt ("Enter a whole number: "); //ask user for a whole number


const repeatString = function(inputString, inputNumber) { //tells us whats needed for function
    let userNumber = parseInt (inputNumber);
    if (isNaN(userNumber) || userNumber < 0) {
        return 'ERROR'; // Return error if the number is invalid
    } //converts user input to int

    let stringRepeater = inputString.repeat(userNumber); // repeats string by the number entered

    let repeatedString = []; // empty array

    let i = 0;
    while (i < stringRepeater.length){
    i++ 
    repeatedString.push(stringRepeater[i]);
    }

    console.log(repeatedString);
}

repeatString();

console.log(repeatString());
// Do not edit below this line
module.exports = repeatString;
