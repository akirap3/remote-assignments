/*Given an array of integers, 
  return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution,
  and you may not use the same element twice. 
*/
function twoSum(nums, target) {
  let temp = [];
  // extract indices
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      temp.push(i);
    }
  }
  // extract the two indices and push to resultIndex array
  let resultIndex = [];
  for (index of temp) {
    for (let j = 1; j < temp.length; j++) {
      if (nums[index] + nums[temp[j]] === target) {
        resultIndex.push(index, temp[j]);
        return resultIndex;
      }
    }
  }
}

// test data
const testArr = [1, 2, 3, 5, 73, 23, 423, 7];
const testTarget = 9;

// log result
let result = twoSum(testArr, testTarget); // answer => [1,7]
console.log(result);
