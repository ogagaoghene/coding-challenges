let removeDuplicates = (function(array) {
  if (array.length == 0) return [];
  let noDuplicatesArray = [];
  for(element of array) {
    if(!noDuplicatesArray.includes(element)) {
      noDuplicatesArray.push(element);
    }
  }
  return noDuplicatesArray;
})([1,2,3,4,4,5,5]);

console.log(removeDuplicates);