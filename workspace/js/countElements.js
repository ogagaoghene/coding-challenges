const countElement = (arr, target) => {
    let count = 0;
    for (let idx = 0; idx < arr.length; idx = idx + 1) {
        if (arr[idx] == target) {
            count = count + 1;
        }
    }
    return count;
}

const numArr = [1,1, 3, 3, 5, 5, 5, 5, 5, 5, 9, 9, 11];
let target = 5;

console.log(`The count of the target - ${target} is:`, countElement(numArr, target));