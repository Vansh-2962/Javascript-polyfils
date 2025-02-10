let memory = ["Bit", "Byte", "KB", "MB", "GB", "TB", "PB"];

// Signature of forEach function :-
// 1. Iterates over the array.
// 2. Takes two arguement - element and index

memory.forEach((elm, index) => {
  console.log(elm);
});

// --------------------------------------------------------------------------------------

// Polyfil function of forEach function :-
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

memory.myForEach((elm, index) => {
  console.log(elm);
});


