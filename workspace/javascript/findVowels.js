function findVowels(str) {
    let count = 0;
    const checker = "aeiou";

    for (let char of str.toLowerCase()) {
        if (checker.includes(char))
            count++;
    }

    return count;
}

const sample_string = "Hello";
console.log(findVowels(sample_string));