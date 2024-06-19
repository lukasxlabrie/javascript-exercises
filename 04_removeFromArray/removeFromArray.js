const removeFromArray = function(inputArray, ...inputs) { 
    //will use an array and user input

    let newArray = [];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === inputArray) {
        // do nothing
      } else {
        newArray.push(inputs[i]); // add to new array
      }
    }
    
    return newArray;

console.log(newArray) //output array
};

removeFromArray([1,2,3,4],',2',',3');
// this means use the function to remove ",2,3 " from the array [1, 2, 3, 4]

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