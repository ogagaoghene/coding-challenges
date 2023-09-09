def makeDecision():
    num = int(input("Please enter number: "))
    if num > 10:
        print("The number is over 10")
    elif num == 10:
        print("The number is equal to 10")
    else:
        print("The number is under 10")

def main():
    makeDecision() 

if __name__ == "__main__":
    main()