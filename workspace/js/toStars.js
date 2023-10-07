function toStar(number){
    return '*'.repeat(number);
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const stars = numbers.map(toStar);

console.log(stars);