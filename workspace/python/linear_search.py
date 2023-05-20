def linear_search(a_list, target):
   for i in a_list:
      if i == target:
         return True
   return False
   
def main():
   a_list = [1, 8, 32, 91, 5, 15, 9, 100, 3]
   print(linear_search(a_list, 100))

if __name__ == '__main__': 
  main()