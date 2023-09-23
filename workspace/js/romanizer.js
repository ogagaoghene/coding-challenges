const conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

const RomanNumeralToInteger = function(str) {
    const arr = str.split('');

    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;

    for (let idx = 0; idx < arr.length; idx++) {
        current = arr[idx];
        currentValue = conversion[current];

        next = arr[idx+1];
        nextValue = conversion[next];

        if (currentValue < nextValue) {
            total -= currentValue;
        } 
        else {
            total += currentValue;
        }
    }
    return total;
}

let numeral = "XI";
console.log(RomanNumeralToInteger(numeral));