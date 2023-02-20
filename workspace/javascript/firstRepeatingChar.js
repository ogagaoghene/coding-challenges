// A algorithm brute force approach to return the first repeating character - 0(n*n)
let firstRepeatingCharacter = (function(string){
  for(let outerIndex = 0; outerIndex < string.length; outerIndex++){
    for(let innerIndex = 0; innerIndex < outerIndex; innerIndex++){
      if(string.charAt(outerIndex) == string.charAt(innerIndex))
        return string.charAt(outerIndex);
    }
  }
  return '\0';
}
)("total");

console.log(firstRepeatingCharacter);

// An improved algorithm that solves same problem in 0(n) time complexity using a Hash table
let firstRepeatingCharacter2 = (function(string) {
  let visited = {};
  for (ch of string) {
    if(visited[ch]) return ch; 
    else visited[ch] = true;
  }
})("apple");

console.log(firstRepeatingCharacter2);


let add = (function(a, b) {
  return (a+b);
})(12,10);

console.log(add);
