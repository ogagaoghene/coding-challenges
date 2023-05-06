const factorialOfNumber = function(num) {
    let fact = 1;
    let number = num;

    while (number > 0) {
        fact *= number;
        number--;
    }
    console.log(num + "! =", fact);
}

factorialOfNumber(3);