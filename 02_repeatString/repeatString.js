const repeatString = function() {
    let userString = prompt ("Enter a noun: "); //ask user for a noun
    let userNumber = prompt ("Enter a whole number: "); //ask user for a whole number
    let numberUsed = parseInt (userNumber); //converts user input to int

    let repeatedString = [userString * numberUsed]; // goal is to create an array which consists of the users string repated by the users number

    if (i == [-1]){ // if array space is -1 remove , after last iterration
        alert ("  .")
        else
            alert (" ") // if array is any other index just output text with coma
    };

};

// Do not edit below this line
module.exports = repeatString;
