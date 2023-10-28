const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}

let arr = [2,3];
console.log(swap(arr, 0,1));

