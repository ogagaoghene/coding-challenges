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

let sample1 = "foam";
let sample2 = [1,2,3,4,5,6];

console.log(reverseArray(sample1.split('')));
console.log(reverseArray(sample2));