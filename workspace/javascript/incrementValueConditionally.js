let incrementCounter = function () {
    let counter = 0;

    if (counter < 3) {
        console.log("Count:", counter);
    }
    counter++;

    if (counter < 3) {
        console.log("count:", counter);
    }
    counter++;

    if (counter < 3) {
        console.log("count:", counter);
    }
    counter++;
    if (counter < 3) {
        console.log("count:", counter);
    }
    
    return counter;
}

incrementCounter();