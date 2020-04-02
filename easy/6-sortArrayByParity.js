/*
  Given an array of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
  You may return any answer array that satisfies this condition. 
 
  Input: [3,1,2,4]
  Output: [2,4,3,1]
  The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/
const input =  [3,1,2,4]

const sortArrayByParity = (array) => {
  let answer = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      answer.unshift(array[i])
    }
    else {
      answer.push(array[i])
    }
  }
  return answer
}

console.log(sortArrayByParity(input)); // returns [ 4, 2, 3, 1 ]
