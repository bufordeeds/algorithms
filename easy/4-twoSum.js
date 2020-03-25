// Given two inputs (an unordered array of numbers, and a target sum) return the two values that add up to the target sum

const arr = [1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,100,200]
const ts = 300

const twoSum = (array, targetSum) => {

    for (let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++)
        if( array[i] + array[j] === targetSum) {
          return [array[i], array[j]]
      }
    }
    return 'no values sum up to target sum'
}

// console.log(twoSum(arr,ts));

const twoSumSquared = (array, targetSum) => {
  let obj = {}

  for (let i = 0; i < array.length; i++) {
    if ( obj[array[i]] ) {
      return [array[i],obj[array[i]]]
    }
    else {
      let difference = targetSum - array[i]
      obj[difference] = array[i]
    }
  }
  return 'no values sum up to target sum'
}

// console.log(twoSumSquared(arr,ts));

console.time('algo1')
for (let i = 1; i < 1000000; i++) {
    twoSum(arr, ts)
}
console.timeEnd('algo1')
console.time('algo2')
for (let i = 1; i < 1000000; i++) {
    twoSumSquared(arr, ts);
}
console.timeEnd('algo2')


/* 
twoSum
Space complexity is O(1)
Time complexity is O(N^2)

twoSum
Space complexity is O(N)
Time complexity is O(N)


obj = {
9:1,
6:4,
-1:11,
}
*/