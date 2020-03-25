/* 
Write a short program that prints each number from 1 to 100 on a new line. 
For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. 
*/

const fizzbuzz = () => {              // declare a function
  for (let i = 1; i <= 100; i++) {    // for loop that starts at 1 and increments until it reaches 100
    if (i % 3 === 0 && i % 5 === 0) { // a check to see if i is a multiple of 3 & 5 note the strictest check is checked first
      console.log('FizzBuzz')
    }
    else if (i % 3 === 0) {           // a check to see if i is a multiple of 3
      console.log('Fizz')
    }
    else if (i % 5 === 0) {           // a check to see if i is a multiple of 5
      console.log('Buzz')
    }
    else {                            // printing i if all else fails
      console.log(i); 
    }
  }
}

fizzbuzz()
