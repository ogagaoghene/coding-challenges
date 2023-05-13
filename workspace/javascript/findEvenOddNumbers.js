const findEvenOddNumbers = function (num) {
    if (num % 2 == 0)
        return 1;
    else 
        return -1;
}

let flag = findEvenOddNumbers(12);
if (flag == 1) 
    console.log("Number is Even");
if (flag == -1)
    console.log("Number is Odd");