//Two sum algorithmic coding pattern - Brute force approach - Two pointer
//Iterate through an array of numbers searching for two numbers that sums up to the target and return true if found
function twoSum(arr, target) {
  if(arr.length < 2) {
    console.log("Array length is less than 2");
    return;
  }
  for(let outer = 0; outer < arr.length; ++outer) {
    for(let inner = outer+1; inner < arr.length; ++inner) {
      if(arr[outer] + arr[inner] === target) {
        return true;
      }
    }
  }
  return false;
}

const sampleArray = [1,3,4,5];
let target = 6;

console.log(twoSum(sampleArray, target));