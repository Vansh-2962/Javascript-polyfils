let num1 = [1, 3, 5, 7];
let num2 = [2, 4, 6, 8];

// Signature of concat method :-
// 1. Takes two or more arrays
// 2. Returns a new array

console.log(num1.concat(num2));

// ----------------------------------------------------------------------------------------

if (!Array.prototype.myConcat) {
  Array.prototype.myConcat = function (...arrs) {
    let result = [...this];
    for (let arr of arrs) {
      if (Array.isArray(arr)) {
        result.push(...arr);
      } else {
        result.push(arr);
      }
    }
    return result;
  };
}

console.log(num1.myConcat(num2));

