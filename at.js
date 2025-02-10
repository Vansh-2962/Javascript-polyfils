let animals = ["Dog", "Cat", "Lion", "Hippo", "Elephant"];

// Signature of at method :-
// 1. Iterates over every element in an array
// 2. Returns the element present at a specified index

console.log(animals.at(2));

// -------------------------------------------------------------------------------

// Polyfil function of at method
if (!Array.prototype.myAt) {
  Array.prototype.myAt = function (index) {
    for (let i = 0; i < this.length; i++) {
      if (i == index) {
        return this[i];
      }
    }
    return undefined;
  };
}

console.log(animals.myAt(1));
