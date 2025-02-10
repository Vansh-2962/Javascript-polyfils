let fruits = ["apple", "mango", "banana", "grapes", "litchi"];

// signature of map function :-
// 1. returns a new array
// 2. iterates of every element
// 3. takes 2 arguements - element and index

let newFruits = fruits.map((fruit, index) => {
  return fruit + "!";
});
console.log(newFruits); // ['apple!', 'mango!', 'banana!', 'grapes!', 'litchi!']

// --------------------------------------------------------------------------------------------

// Polyfil function of map :-
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let newValue = userFn(this[i], i);
      result.push(newValue);
    }
    return result;
  };
}

let newFruits2 = fruits.myMap((fruit, index) => {
  return fruit + index;
});
console.log(newFruits2);

