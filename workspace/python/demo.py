def prompt():
    firstname = input("Please enter your firstname: ")
    lastname  = input("Please enter your lastname: ")
    print("Hello", firstname, lastname)

def displayName():
    prompt()

def main():
    displayName()

if __name__ == '__main__':
    main()