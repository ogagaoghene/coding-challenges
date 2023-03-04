const findMax = (arr) => {
  let result = 0;

  for(let index = 0; index < arr.length; index++) {
    if(arr[index] > result) {
      result = arr[index];
    }
  }
  return result;
}

const list = [1,2,5,-1,10,20];
console.log(findMax(list));