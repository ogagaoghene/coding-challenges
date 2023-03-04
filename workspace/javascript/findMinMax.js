let list = [12,13,4,23,33];
const findMinMax = (function(arr, m="max") {
  let result = arr[0];
  for(let index = 0; index < arr.length; index++) {
    if(m == "min" && arr[index] < result) {
      result = arr[index];
    }
    if(m =="max" && arr[index] > result) {
      result = arr[index];
    }
  }
  return result;
})(list, "min");

console.log(findMinMax);