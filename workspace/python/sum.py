def main():
  print('The sum of the list is {}'.format(num_list1([1,2,3,4,5])))
  print('The sum of the list is {}'.format(num_list2([1,2,3,4,5])))

# Iterative implementation
def num_list1(array):
  total = 0

  for num in array:
    total += num
  
  return total

# Recursive implementation 
def num_list2(arr):
  if len(arr) == 1:
    return arr[0]
  else:
    return arr[0] + num_list2(arr[1:])
  
if __name__ == '__main__': 
  main()
