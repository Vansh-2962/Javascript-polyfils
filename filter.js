let evenOdd = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// signature of filter function :-
// 1. It iterates over every element in the array.
// 2. It takes two arguements - element and index.
// 3. It returns a new array if a condition is satisfied.

let newEvenOdd = evenOdd.filter((num, index) => {
  return num % 2 === 0;
});
console.log(newEvenOdd);

// ---------------------------------------------------------------------------------------

// Polyfil function of filter function :-
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i], i)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

let filteredEvenOdd = evenOdd.myFilter((num, index) => {
  return num % 2 === 0;
});

console.log(filteredEvenOdd);
