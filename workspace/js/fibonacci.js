const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let pos = 3; pos < 20; pos++) {
    fibonacci[pos] = fibonacci[pos - 1] + fibonacci[pos - 2];
} 

for (let index = 1; index < fibonacci.length-1; index++) {
    console.log(fibonacci[index]);
}