/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

// function isEmpty(arr) {
//   if(arr.length === 0) {
//     return true;
//   }
//   return false;
// }

const isEmpty = arr => (arr.length === 0) ? true : false;

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/*
  EXPECTED RESULT
  ---------------
  false
  true
*/
