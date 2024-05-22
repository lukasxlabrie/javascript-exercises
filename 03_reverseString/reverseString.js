const reverseString = function(inputString)  { //states function needs 1 arguement in this case its a string

    wordStorage = []; //empty array
    wordStorage.push(inputString) // takes string and puts it into the array

    wordReverseStorage = [] // empty array
    
    let i = wordStorage.length -1; // starts loop at the end if array
    while (i >= 0) { // will run while i is greater than or eqaul to 0
        wordReverseStorage.push([i]) // will move current char to new array
    i--
    }

    let wordReverse = wordReverseStorage.join (" "); // combines elementd in array and removes ,
    console.log (wordReverse)
};

reverseString ();

// Do not edit below this line
module.exports = reverseString;
