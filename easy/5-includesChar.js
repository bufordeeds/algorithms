// Given two inputs (a string input like "pizza", and a character like "a"), return the index where the character appears in the string

const str = 'pizza'
const char = 'z'

const includesChar = (string, char) => {
  let arrOfIndices = []
  let counter = 0
  for(let i = 0; i <  string.length; i++) {
    if(string[i] === char){
      arrOfIndices[counter] = i
      counter++
    }
  }
  return arrOfIndices.length > 0
    ? arrOfIndices
    :`The letter doesn't exsist.`
}

console.log(includesChar(str, char));

/*
Space complexity is O(N) because the arrOfIndices array will grow in size as the input string grows in size.
Time complexity is O(N) because we only iterate over the string once.
*/