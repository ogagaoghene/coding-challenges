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

