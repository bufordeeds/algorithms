// Given two inputs (an unordered array of numbers, and a target sum) return the two values that add up to the target sum

const arr = [1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,1,3,11,9,6,100,200]
const ts = 300

const twoNumberSum = (nums, target) => {

    for (let i = 0; i < nums.length; i++){
      for(let j = i + 1; j < nums.length; j++)
        if( nums[i] + nums[j] === target) {
          return [nums[i], nums[j]]
      }
    }
    return 'no values sum up to target sum'
}

// console.log(twoSum(arr,ts));

const twoSum = (nums, target) => {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    if ( obj[nums[i]] ) {
      return [nums[i],obj[nums[i]]]
    }
    else {
      let difference = target - nums[i]
      obj[difference] = nums[i]
    }
  }
  return 'no values sum up to target sum'
}

// console.log(twoSumSquared(arr,ts));

console.time('algo1')
for (let i = 1; i < 1000000; i++) {
    twoNumberSum(arr, ts)
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