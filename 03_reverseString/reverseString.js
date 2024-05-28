const reverseString = function(input) {
    let wordReverseStorage = []; // empty array
    
    let i = input.length - 1; // starts loop at the end of the string
    while (i >= 0) { // will run while i is greater than or equal to 0
        wordReverseStorage.push(input[i]); // will move current char to new array
        i--;
    }

    let wordReverse = wordReverseStorage.join(''); // combines elements in array and removes commas
    return wordReverse; // return the reversed string
};

// Call the function with an example input to test
reverseString('');

// Do not edit below this line
module.exports = reverseString;