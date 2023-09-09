def checkRange():
    num = int(input("Please enter a number between 10 and 20: "))
    if num >= 10 and num <= 20:
        print("Thank you!")
    else:
        print("Out of range")

def main():
    checkRange()

if __name__ == "__main__":
    main()