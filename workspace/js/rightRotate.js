const rightRotate = function (array, numberOfShifts) {
    let temp = 0;
    const lengthOfArray = array.length;
    numberOfShifts = numberOfShifts % lengthOfArray;

    for (let idx = 0; idx < numberOfShifts; idx++) {
        temp = array.pop();
        array.unshift(temp);
    }

    return array;
}

let inputArray = [1,2,3,4];
let inputNumberOfShifts = 5;

console.log(rightRotate(inputArray, inputNumberOfShifts));

