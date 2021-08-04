// Complete max number function without using built-in methods
function max(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

let testArr1 = [1, 2, 4, 5];
let testArr2 = [5, 2, 7, 1, 6];

console.log(max(testArr2));
