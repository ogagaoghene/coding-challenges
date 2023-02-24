let sample = [2,3,4];
let target = 4;

const linearSearch = (function(arr, target) {
  for(let index = 0; index < arr.length; index++) {
    if(arr[index] == target) {
      return `Found ${target} at arr[${index}]`;
    }
  }
  return "Not Found";
})(sample, target);

console.log(linearSearch);