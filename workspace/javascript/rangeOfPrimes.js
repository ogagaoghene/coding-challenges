const isPrimeRange  = (lowerNumber, higherNumber) => {
    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
    for (let index = lowerNumber; index <= higherNumber; index++) {
        let flag = 0;

        for (let denom = 2; denom < index; denom++) {
            if (index % denom === 0) {
                flag = 1;
                break;
            }
        }
        if (index > 1 && flag == 0) {
            console.log(index);
        }
    }
    
}


isPrimeRange(2, 100);