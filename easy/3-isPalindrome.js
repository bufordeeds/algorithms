// Given a string input, return a boolean value whether or not it is a palindrome

const rc = 'racecar' // true
const tt = 'tommot'  // true 
const me = 'buford'  // false

const isPalindrome = (string) => {
  let pointer1 = 0
  let pointer2 = string.length - 1                

  while (pointer1 <= pointer2) {                  
    if (string[pointer1] !== string[pointer2]) {
      return false
    }
    else {
      pointer1++
      pointer2--
    }
  }
  return true
}

console.log(isPalindrome(me));

/*
Space complexity is O(1) because no matter the size of the input string, the pointer value space will remain contant
Time complexity is O(N), because the pointers are traversing the string from both ends, you could say time complexity is O(N/2) but I'm told we drop whats next to N because the difference is insignificant
*/