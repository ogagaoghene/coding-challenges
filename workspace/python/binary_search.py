def binary_search(a_list, n):
  first = 0
  last = len(a_list) - 1
  
  while last >= first:
    mid = (first + last) // 2
    if a_list[mid] == n:
        return True
    else:
        if n < a_list[mid]:
            last = mid - 1
        else:
            first = mid + 1
    return False
  

def main():
  list = [1,2,3,4,5,6,7,8]
  print(binary_search(list, 11))
  
  
if __name__ == '__main__': 
  main()
