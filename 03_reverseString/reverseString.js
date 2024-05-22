const reverseString = function(input = string)  { //states function needs 1 arguement in this case its a string

    let word = input
    wordReverseStorage = [] // empty array
    
    let i = input.length -1; // starts loop at the end of array
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
