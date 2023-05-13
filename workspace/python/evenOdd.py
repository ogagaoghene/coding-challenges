def main():
  num = 11
  flag = evenOdd(num)
  if (flag == 1):
    print("Number is Even")
  if (flag == -1):
    print("Number is Odd")


def evenOdd(num):
  if (num % 2 == 0):
    return 1
  else:
    return -1
  
  
if __name__ == '__main__': 
  main()
