const factorialOfNumber = function (num) {
  let fact = 1;
  let number = num;

  while (number > 0) {
    fact *= number;
    number--;
  }
  console.log(num + "! =", fact);
};

const recursiveFactorial = function (num) {
    if (num <= 1) 
        return num;
    else
        return num * recursiveFactorial(num - 1);
}

let num = 5;
factorialOfNumber(3);
console.log(num+ "! =", recursiveFactorial(5));
