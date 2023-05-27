const divide_or_square = (number) => {
    var square_root;
    var remainder;
    if (number % 5 == 0)  {
        square_root = number * 0.5;
        return square_root;
    }
    else {
        remainder = number % 5;
        return remainder;
    }
}

console.log(divide_or_square(10));