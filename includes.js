let lang = ["JS", "C++", "Java", "Python", "Ruby"];

// Signature of the includes methd :-
// 1. Iterates over every element of an array
// 2. If an element is found it returns true/false

let isPresent = lang.includes("JS");
console.log(isPresent);

// ---------------------------------------------------------------------------

// Polyfil function of includes method :-
if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (searchElm, startIndex = 0) {
    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === searchElm) {
        return true;
      }
    }
    return false;
  };
}
console.log(lang.myIncludes("C++", 1));


