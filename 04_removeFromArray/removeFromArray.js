const removeFromArray = function(array, input) { 
    //will use an array and user input
array.pop(input) //removes input from array
console.log(array) //output array
};

removeFromArray([1,2,3,4], 3)
// this means use the function to remove ", 3 " from the array [1, 2, 3, 4]

// Do not edit below this line
module.exports = removeFromArray;
