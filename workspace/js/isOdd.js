const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];

function isOdd(number) {
    return number % 2 !== 0;
}

const oddNumbers = numbers.filter(n => isOdd(n))

console.log(oddNumbers);