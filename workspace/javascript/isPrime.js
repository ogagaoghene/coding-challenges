const isPrime = (num) => {
    let prime;
    if (num <= 0) {
        prime = false;
    }
    else {
        prime = true;
    }

    if (num > 2) {
        let denominator = 2;
        while (denominator <= Math.sqrt(num)) {
            if (num % denominator === 0) {
                prime = false;
                break;
            }
            else {
                denominator++;
            }
        }
    }
    if (prime) {
        console.log(num, "is a prime number");
    }
    else {
        console.log(num, "is not a prime number");
    }
}

isPrime(13);