const repeatString = function() {
    let inputString = prompt ("Enter a noun: "); //ask user for a noun
    let inputNumber = prompt ("Enter a whole number: "); //ask user for a whole number
    let userNumber = parseInt (inputNumber); //converts user input to int

    let stringRepeater = inputString.repeat(userNumber); // repeats string by the number entered

    let repeatedString = []; // empty array
    stringRepeater.push(repeatedString); //take output and adds to array

    for (let i = 0; i > Array.length; i++);
    
}

// Do not edit below this line
module.exports = repeatString;
