const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log('Before sorting');
console.log(unsorted);
console.log('After sorting');
console.log(bubbleSort(unsorted));