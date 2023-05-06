const countMultiplesOf3 = function() {
    let countIndex = 0;
    let multiplesOf3 = 0;

    while ( countIndex < 100) {
        if (countIndex % 3 == 0) {
            multiplesOf3++;
            console.log(countIndex);
        }
        countIndex++;
    }
    console.log(multiplesOf3, "found");
}

countMultiplesOf3();