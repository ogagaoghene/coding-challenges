const insertAtFirst = (numArr) => {
    for(let idx = numArr.length; idx >= 0; idx--) {
        numArr[idx] = numArr[idx-1];
    }
    numArr[0] = -2;
    return numArr;
}

const inputArray = [3,4,5];
console.log(insertAtFirst(inputArray));