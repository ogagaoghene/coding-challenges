const linearSearch = (arr, target) => {
    for (let idx = 0; idx < arr.length; idx=idx+1) {
        if (arr[idx] == target) {
            return idx;
        }
    }
    return -1;
}

let numArr = [1, 30, 10, 15];
let target = 30;

console.log(linearSearch(numArr, target));