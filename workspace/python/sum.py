def main():
  print('The sum of the list is {}'.format(num_list([1,2,3,4,5])))

def num_list(array):
  total = 0

  for num in array:
    total += num
  
  return total


if __name__ == '__main__':
  main()
