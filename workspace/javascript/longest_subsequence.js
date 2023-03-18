function list1(arr, i = 0, previous = -Infinity){
  if(i == arr.length)
    return 0;
  else if(arr[i] <= previous)
    return list1(arr, i+1, previous);
  else
    return Math.max(1 + list1(arr, i+1, arr[i]), list1(arr, i+1, previous));
}


