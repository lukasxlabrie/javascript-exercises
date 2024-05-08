const repeatString = function() {
    let userString = prompt ("Enter a noun: "); //ask user for a noun
    let userNumber = prompt ("Enter a whole number: "); //ask user for a whole number
    let numberUsed = parseInt (userNumber); //converts user input to int

    let stringRepeater = userString * numberUsed; // creates 3 strings

    let repeatedString = []; // empty array
    stringRepeater.push(repeatedString); //take output and adds to array
}

// Do not edit below this line
module.exports = repeatString;
