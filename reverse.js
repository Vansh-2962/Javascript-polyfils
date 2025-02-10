let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Signature of reverse method :-
// 1. Does not return a new array
// 2. Mutates the same array and returns reference to the same array

const nums2 = nums.reverse();
console.log(nums2);

// -------------------------------------------------------------------------------------------------

if (!Array.prototype.myReverse) {
  Array.prototype.myReverse = function(){
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
      let temp = this[i];
      this[i] = this[j];
      this[j] = temp;
      i++;
      j--;
    }
    return this;
  };
}

const nums3 = nums.myReverse();
console.log(nums3);
