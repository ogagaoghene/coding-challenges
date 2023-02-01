//A JavaScript function that repeats a string n times
const repeatString = (str, n) => {
  var accumulator = '';
  for (let idx=0; idx<n; ++idx) {
    accumulator += str;
  }
  return accumulator;
}

const sample = 'bat';
console.log(repeatString(sample, 3));