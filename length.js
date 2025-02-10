let cars = ["BMW", "Ferrari", "Ford", "Jaguar", "Range Rover", "Mercedes"];

// Signature of length
// Returns the length/noOfElements in the array.

// Working of length property :-
// 1. Inititalize a counter variable with 0
// 2. Iterates over the array
// 3. Increments the counter by 1
// 4. Returns the counter

let len = cars.length;
console.log(len);

// -------------------------------------------------------------------------------------------

// Polyfil function for length property :-
if (!Array.prototype.myLength) {
  Array.prototype.myLength = function () {
    let count = 0;
    while (this[count] !== undefined) {
      count++;
    }
    return count;
  };
}
console.log(cars.myLength());


