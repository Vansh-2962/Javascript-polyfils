let gadgets = ["mobile", "playstation", "laptop", "pc", "mixer"];

// signature of keys method :-
// 1. It iterates over every element in an array
// 2. It returns the indexes of all elements in an array

let keys = gadgets.keys();
for (let key of keys) {
  console.log(key);
}

// ---------------------------------------------------------------------------------------------------

if (!Array.prototype.myKeys) {
  Array.prototype.myKeys = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(i);
    }
    return result;
  };
}

let myKeys = gadgets.myKeys();
for (let myKey of myKeys) {
  console.log(myKey);
}


