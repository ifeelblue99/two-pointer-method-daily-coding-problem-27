/*
Given a string of round, curly, and square open and closing brackets, return whether
the brackets are balanced (well-formed).
For example, given the string "([])", you should return true.
Given the string "([)]" or "((()", you should return false.
*/

// set up
const str = "([())])"

function validateBrackets(s){
  
  if (s.length%2!=0) {
    return false
  }
  
  // pointer 1
  let pointer = Math.floor(s.length/2) 
  // pointer 2
  let middle = pointer-1
  
  while(middle>0){
    if (s[middle]+s[pointer]!=("[]"||"()")) {
      return false
    }
    
    middle--
    pointer++
  }
  
  return true
}

// driver decode 
console.log(validateBrackets(str))
