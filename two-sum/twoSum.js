//TNaive two pointer sum - O(nxn) 
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


//Better two pointer sum - O(n) time complexity
const twoSum2 = (arr, target) => {
  let left = 0;
  let right = arr.length-1;

  while(left < right) {
    if(arr[left] + arr[right] === target) {
      return true;
    } else if(arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

const sampleArray = [1,3,4,5];
let target = -9;

console.log(twoSum(sampleArray, target));
console.log(twoSum2(sampleArray, target));