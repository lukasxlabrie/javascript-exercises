const removeFromArray = function(inputArray, input) { 
    //will use an array and user input

    let newArray = [];

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === input) {
        // do nothing
      } else {
        newArray.push(inputArray[i]); // add to new array
      }
    }
    
    return newArray;
    

return newArray; //saves new array
console.log(newArray) //output array
};

removeFromArray([1,2,3,4], 3)
// this means use the function to remove ", 3 " from the array [1, 2, 3, 4]

// Do not edit below this line
module.exports = removeFromArray;


/// PSEUDO CODE
/// GET ARRAY
/// GET INPUT
/// COMPARE INPUT TO ARRAY
/// IF INPUT OS FOUND IN ARRAY, REMOVE FROM ARRAY (OR IF NOT ADD TO NEW ARRAY)
///OUTPUT NEW ARRAY