const printMatrix = (myMatrix) => {
    for (let rows = 0;  rows < myMatrix.length; rows++) {
        for(let cols = 0; cols < myMatrix[rows].length; cols++) {
            console.log(myMatrix[rows][cols]);
        }
    }
}

const averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

printMatrix(averageTemp);