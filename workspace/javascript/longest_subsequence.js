function list1(arr, i = 0, previous = -Infinity){
  if(i == arr.length)
    return 0;
  else if(arr[i] <= previous)
    return list1(arr, i+1, previous);
  else
    return Math.max(1 + list1(arr, i+1, arr[i]), list1(arr, i+1, previous));
}


function list2(arr){
  if(arr.length < 2) return arr.length;
  let dp = [...Array(arr.length)].map(x => 0);
  let maxLength = 0;
  for(let i = 0; i < arr.length; i++){
    let maxPreviousLength = 0;
    for(let j = 0; j < i; j++){
      if(arr[i] > arr[j])
        maxPreviousLength = Math.max(maxPreviousLength, dp[j]);
    }
    dp[i] = maxPreviousLength + 1;
    maxLength = Math.max(maxLength, dp[i]);
  }
  return maxLength;
}

