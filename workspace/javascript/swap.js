const swap = (function(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
})([20,10], 0, 1);

console.log(swap);