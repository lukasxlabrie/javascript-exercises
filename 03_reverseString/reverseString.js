const reverseString = function(inputString)  { //states function needs 1 arguement in this case its a string

    let word = inputString
    wordReverseStorage = [] // empty array
    
    let i = inputString.length -1; // starts loop at the end if array
    while (i >= -1) { // will run while i is greater than or eqaul to 0
        wordReverseStorage.push(inputString.charAt[i]) // will move current char to new array
    i--
    }

    let wordReverse = wordReverseStorage.join (" "); // combines elements in array and removes ,
    console.log (wordReverse)
};

reverseString ();

// Do not edit below this line
module.exports = reverseString;
