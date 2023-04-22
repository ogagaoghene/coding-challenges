const reverseArray = (arr) => {
    let first = 0;
    let last  = arr.length - 1;

    while(first <= last) {
        const temp = arr[first];
        arr[first] = arr[last];
        arr[last]  = temp;

        first++;
        last--;
    }

    return arr;
}

let sample = [1,2,3,4];
console.log(reverseArray(sample));