const repeatString = function() {
    let inputString = prompt ("Enter a noun: "); //ask user for a noun
    let inputNumber = prompt ("Enter a whole number: "); //ask user for a whole number
    let userNumber = parseInt (inputNumber); //converts user input to int

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
