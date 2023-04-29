let getNegatives = (function(list) {
    let newArr = [];

    for (let index = 0; index < list.length; ++index) {
        let element = list[index];

        if (element < 0) {
            newArr.push(element);
        }
    }

    return newArr;
})([-5,-10, 2, 90, 1, 12, -12]);

console.log(getNegatives);