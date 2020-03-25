// 1. given an array of numbers, return a new array with each value squared

const arr = [1, 2, 3, 4] // [1,4,9,16]     // test case

const squaresOfSortedArray = (array) => {  // create a funtion that takes an array
  const newarr = []                        // create a new array since we are returning a new array and don't want to alter the original one
  array.forEach((num) => {                 // loop over each element in the array
    const square = num * num               // create a variable that holds the value of the squared element
    newarr.push(square);                   // add the squared element to the previously created array
  });
  return newarr                            // return the new array
}

console.log(squaresOfSortedArray(arr));
