let colors = [
  "Red",
  "Blue",
  "Black",
  "Yellow",
  "Orange",
  "Magenta",
  "Cyan",
  "Purple",
  "Violet",
  "Green",
];

// Signature of the find function
// 1. Iterates over the array.
// 2. Returns the value of the element if the condition is satisfied.
// 3. Takes two arguements - element and index.

let newColors = colors.find((color, index) => {
  return color === "Black";
});
console.log(newColors);

// ----------------------------------------------------------------------------------------------------------

// Polyfil function of find function :-
if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i], i)) {
        return this[i];
      }
    }
    return undefined;
  };
}

let val = colors.myFind((color, index) => {
  return color === "Green";
});
console.log(val);
