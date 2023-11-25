const removeAtFirst = (numArr) => {
    for(let idx = 0; idx < numArr.length; idx++) {
        numArr[idx] = numArr[idx + 1];
    }

    return numArr;
}

const inputArray = [4,5,6];
console.log(removeAtFirst(inputArray));