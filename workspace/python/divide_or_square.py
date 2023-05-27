def divide_or_square(number):
   if number % 5 == 0:
      square_root = number * 0.5
      return f'The square root of the number is {square_root}'
   else:
      remainder = number % 5
      return f'The remainder of the division is {remainder}'
   
def main():
   print(divide_or_square(10))
   
if __name__ == '__main__': 
  main()

