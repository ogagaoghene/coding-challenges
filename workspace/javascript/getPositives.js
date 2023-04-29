const getPositives = (arr) => {
    let outputArr = [];

    for(let idx = 0; idx < arr.length; ++idx) {
        let element = arr[idx];

        if (element >= 0) {
            outputArr.push(element);
        }
    }

    return outputArr;
}


const sample  = [-5,-10, 2, 90, 1, 12, -12];
let resultArr = getPositives(sample);

console.log(resultArr);
