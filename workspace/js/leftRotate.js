const leftRotate = (array, k) => {
    let temp = 0;
    const len = array.length;
    k = k % len;

    for (let idx = 0; idx < k; idx++) {
        temp = array.shift();
        array.push(temp);
    }
    return array;
}

let arr = [1,2,3,4];
let shifts = 2;

console.log(leftRotate(arr, 2));
