const incrementArrayValues = (list) => {
    console.log("incrementArrayValues() begins");

    for (let idx = 0; idx < list.length; ++idx) {
        list[idx]++;
    }

    console.log("incrementArrayValues() ends");
}
let arrayValues = [1,2,3,4,5];
console.log("Before call", arrayValues);
incrementArrayValues(arrayValues);
console.log("After call", arrayValues);
