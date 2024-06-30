const removeFromArray = function(inputArray, ...inputs) { 
    //will use an array and user input

    let newArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputs.includes(inputArray[i])) {
        // do nothing
      } else {
        newArray.push(inputArray[i]); // add to new array
      }
    }
    
    return newArray;//output array
};

removeFromArray([1, 2, 3, 4], 3); // test 1
removeFromArray([1, 2, 3, 4], 3, 2); // test 2
removeFromArray([1, 2, 2, 3], 2); // test 3
removeFromArray([1, 2, 3, 4], 7, "tacos"); // test 4 
removeFromArray([1, 2, 3, 4], 7, 2); // test 5
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4); // test 6
removeFromArray(["hey", 2, 3, "ho"], "hey", 3); // test 7
removeFromArray([1, 2, 3], "1", 3); // test 8


// Do not edit below this line
module.exports = removeFromArray;


// PSEUDO CODE

// Step 1: Get the array and input value
// Step 2: Initialize a new array to store results

// Step 3: Loop through each element in the array
    // If the current element is equal to the input value
        // Do nothing (skip this element)
    // Else
        // Add the current element to the new array

// Step 4: Return the new array 